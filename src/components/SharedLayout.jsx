import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header';
import { Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <Box
      sx={{
        p: 7,
        pt: 22,
        display: 'flex',
        gap: 2,
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: 'inherit',
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={2000} />
    </Box>
  );
};
