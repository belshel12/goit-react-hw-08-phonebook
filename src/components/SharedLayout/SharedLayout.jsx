import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
// import { GlobalStyle } from 'components/GlobalStyles';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';


const SharedLayout = () => {
  return (
    <Container>
    <AppBar/>
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
