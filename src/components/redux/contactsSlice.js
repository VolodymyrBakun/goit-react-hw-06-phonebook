import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      name: 'Anna Kozak',
      id: 'JW1gLAJUvx31nrgKJIfO1',
      number: '43234234242',
    },
    {
      name: 'Vasyl Bogdan',
      id: 'JW1gLAJUvx31nrgKJIfO2',
      number: "432345623254242",
    },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload);

    },
    findContact: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;

export default contactsSlice.reducer;
