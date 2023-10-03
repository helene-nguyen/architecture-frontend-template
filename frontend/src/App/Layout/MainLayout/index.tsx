//~ Import modules
import './Style/main.scss';
import { RootState } from 'Types/GlobalTypes/Store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

//~ Component
const MainLayout = () => {
  const theme = useSelector((state: RootState) => state.theme?.default);
  return (
    <div className={`main-layout theme--${theme}`}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
