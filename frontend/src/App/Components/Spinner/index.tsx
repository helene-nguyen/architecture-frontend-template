//~ Imports Modules
import './Styles/main.scss';
import { ReactComponent as SpinnerSVG } from './Media/spinner.svg';

//~ Component
const Spinner = () => {
  return (
    <div>
      <SpinnerSVG className="spinner" />
    </div>
  );
};

export default Spinner;
