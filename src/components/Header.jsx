import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

import { Navigation } from 'components/Navigation';
import { LocalLibrary } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <AppBar color="inherit" position="fixed" sx={{ p: 4, pb: 1 }}>
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <LocalLibrary />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 900,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            PhoneBook
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
    </>
  );
};
