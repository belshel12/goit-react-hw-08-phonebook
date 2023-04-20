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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
