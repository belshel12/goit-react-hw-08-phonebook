import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Authorization/authOperations';
import { selectUser } from 'redux/Authorization/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
