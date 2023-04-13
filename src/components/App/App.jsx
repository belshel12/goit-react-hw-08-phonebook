import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Loader from 'components/Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import { Layout } from '../Layout';
import { Title } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} />
    </Layout>
  );
};
