//~ Imports Modules
import './Styles/main.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Types/GlobalTypes/Store';
import { useLazyGetCurrentUserQuery } from '../../../../Store/API/User/userApi';

//~ Component
const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [getCurrentUser, result] = useLazyGetCurrentUserQuery();
  const { data } = result;

  console.log('USER in DASHBOARD--------------------', user);
  console.log('DATA in DASHBOARD', data);

  return (
    <section className="dashboard">
      <h1>Dashboard page</h1>
      <button type="button" onClick={() => getCurrentUser(user.id)}>
        {' '}
        Click me
      </button>
    </section>
  );
};
export default Dashboard;
