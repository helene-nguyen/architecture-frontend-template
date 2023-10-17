//~ Import modules
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState } from 'src/Types/GlobalTypes/Store';

const Protected = () => {
  const { user, status } = useSelector((state: RootState) => state.auth);

  return !user ? (
    <div className="unauthorized">
      <h1>Unauthorized :</h1>
      <span>
        <NavLink to="/signin">Login</NavLink> to gain access
      </span>
    </div>
  ) : (
    <Outlet />
  );
};

export default Protected;