//~ Import modules
import './Style/main.scss';
import { RootState } from '../../../Types/GlobalTypes/Store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

//~ Component
const MainLayout = () => {
  const theme = useSelector((state: RootState) => state.theme?.default);
  return (
    <>
      <Header />
      <main className={`main-layout theme--${theme}`}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
