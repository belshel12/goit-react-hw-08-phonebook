import { AccountCircle } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Authorization/authOperations';
import { selectUser } from 'redux/Authorization/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontWeight: 900,
        color: 'inherit',
        textDecoration: 'none',
        flexGrow: 0.1,
      }}
    >
      <Box
        sx={{
          mr: 4,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 900,
          color: 'inherit',
          textDecoration: 'none',
          alignItems: 'center',
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="h6">{email}</Typography>
      </Box>
      <Button
        type="button"
        size="large"
        sx={{
          fontWeight: 800,
          '&:hover': {
            color: '#ffa726',
          },
        }}
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Box>
  );
};
