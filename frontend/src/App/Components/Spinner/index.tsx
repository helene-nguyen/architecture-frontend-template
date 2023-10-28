//~ Imports Modules
import './Styles/main.scss';
import './Styles/_theme.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Types/GlobalTypes/Store';

//~ Component
const Spinner = () => {
  //
  const theme = useSelector((state: RootState) => state.theme?.default);
  return <div className={`loader-drop theme--${theme}`}></div>;
};

export default Spinner;
