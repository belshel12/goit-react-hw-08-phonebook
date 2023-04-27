import { Breadcrumbs, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Authorization/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

// import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Breadcrumbs
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
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
          Home
        </Typography>
        {isLoggedIn && (
          <Typography
            variant="h6"
            component={NavLink}
            to="/contacts"
            sx={{
              mr: 2,
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
            Contacts
          </Typography>
        )}
      </Breadcrumbs>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
