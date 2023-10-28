//~ Import modules
import './Style/main.scss';
import { useSelector } from 'react-redux';

//~ Import Types
import { RootState } from '../../../Types/GlobalTypes/Store';

//~ Component
const Header = () => {
  const theme = useSelector((state: RootState) => state.theme?.default);

  return <header className={`header theme--${theme}`}>
    <h1>Home Page</h1>
  </header>;
};

export default Header;
