import { Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, letterSpacing: '.1rem' }}>
        Sign in
      </Typography>
      <LoginForm />
    </Box>
  );
}
