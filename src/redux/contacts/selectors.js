export const selectFilteredContacts = state => {
  const filter = state.filters.name;
  const contacts = state.contacts.items;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
