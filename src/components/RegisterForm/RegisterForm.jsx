import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Authorization/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const data = evt.currentTarget;

    dispatch(
      register({
        name: data.elements.name.value,
        email: data.elements.email.value,
        password: data.elements.password.value,
      })
    );
    data.reset();
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
        label="Name"
        type="text"
        name="name"
        required
      ></TextField>
      <TextField label="Email" type="email" name="email" required></TextField>
      <TextField
        label=" Password"
        type="password"
        name="password"
        required
      ></TextField>
      <Button
        type="submit"
        fullWidth
        sx={{ backgroundColor: 'primary.main', color: 'white', p: 1, '&:hover': {
			backgroundColor: '#ffa726',
		 }, }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default RegisterForm;
