import { Link } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </div>
  );
};

