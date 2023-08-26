//~ Import modules
import './Style/main.scss';
import { Outlet } from 'react-router-dom';

//~ Component
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
};

export default MainLayout;
