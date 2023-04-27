import { Box, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, letterSpacing: '.1rem' }}>
        Sign up
      </Typography>
      <RegisterForm />
    </Box>
  );
}
