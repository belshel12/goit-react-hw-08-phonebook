import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
// import { GlobalStyle } from 'components/GlobalStyles';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';


const SharedLayout = () => {
  return (
    <Container>
    <Header/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default SharedLayout;
