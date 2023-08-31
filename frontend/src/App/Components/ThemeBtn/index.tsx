//~ Import modules
import './Styles/main.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Sun } from './Media/sun.svg';
import { ReactComponent as Moon} from './Media/moon.svg';
import { toggleTheme } from '../../../Store/Reducers/Theme';
import { RootState } from '../../../Types/GlobalTypes/Store';

//~ Component
const ThemeBtn = () => {
  const theme = useSelector((state: RootState) => state.theme?.default);
  const [switcher, setSwitcher] = useState('');

  const dispatch = useDispatch();
  const changeTheme = () => {
    setSwitcher('active');
    dispatch(toggleTheme());
  };

  useEffect(() => {
    setTimeout(() => setSwitcher(''), 210);
  });

  return (
    <div className={`theme-btn theme--${theme}`} role="button">
      <span onClick={changeTheme} className={`theme-btn__circle ${switcher} theme--${theme}`}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </span>
    </div>
  );
};

export default ThemeBtn;
