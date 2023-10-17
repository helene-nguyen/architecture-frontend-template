//~ Imports Modules
import './Styles/main.scss';
import SpinnerSVG  from './Media/spinner.svg?react';

//~ Component
const Spinner = () => {
  return (
    <div>
      <SpinnerSVG className="spinner" />
    </div>
  );
};

export default Spinner;
