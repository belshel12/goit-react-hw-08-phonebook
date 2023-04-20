import SharedLayout from 'components/SharedLayout/SharedLayout';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/Authorization/authOperations';

// const SharedLayout = lazy(() => import('components/SharedLayout'));
// const HomePage = lazy(() => import('pages/Home'));
// const ContactsPage = lazy(() => import('pages/Contacts'));
// const RegisterPage = lazy(() => import('pages/Register'));
// const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login/>} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
