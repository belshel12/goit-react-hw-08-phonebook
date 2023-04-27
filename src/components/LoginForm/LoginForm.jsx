import { useDispatch } from 'react-redux';
import { login } from 'redux/Authorization/authOperations';
import { Box, Button, TextField } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '38ch' },
        '& button': { m: 1 },
      }}
    >
      <TextField
        autoFocus
        margin="dense"
        label="Email"
        type="email"
        name="email"
        required
      ></TextField>
      <TextField
        margin="dense"
        label=" Password"
        type="password"
        name="password"
        required
      ></TextField>
      <Button
        type="submit"
        fullWidth
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          p: 1,
          '&:hover': {
            backgroundColor: '#ffa726',
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
