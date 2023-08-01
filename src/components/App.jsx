import { useSelector, useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';

import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const toFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const contactsToRender = () => {
    const normalizedFilter = toFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsData = contactsToRender();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onFormSubmit} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contactsData} />
    </Container>
  );
}
