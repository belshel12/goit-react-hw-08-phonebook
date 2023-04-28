import { NavLink } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@mui/material';

export const AuthNav = () => {
  return (
    <Breadcrumbs>
      <Typography
        variant="h6"
        component={NavLink}
        to="/register"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontWeight: 900,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
			 '&:hover': {
            color: '#ffa726',
          },
			 '&.active': {
            color: 'tomato',
          },
        }}
      >
        Sign up
      </Typography>
      <Typography
        variant="h6"
        component={NavLink}
        to="/login"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontWeight: 900,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
			 '&:hover': {
            color: '#ffa726',
          },
			 '&.active': {
            color: 'tomato',
          },
        }}
      >
        Sign in
      </Typography>
    </Breadcrumbs>
  );
};
