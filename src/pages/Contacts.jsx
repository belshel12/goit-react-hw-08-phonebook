import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { Box, Typography } from '@mui/material';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm />

      <Typography variant="h4">Contacts</Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}
