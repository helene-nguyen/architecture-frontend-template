//~ Imports Modules
import './Styles/main.scss';
import { Spinner, ThemeBtn } from '../../../Components/IndexComponents';

//~ Component
const Home = () => {
  return (
    <section className="home">
      <h1>Hello from Home page</h1>
      <Spinner />
      <ThemeBtn/>
    </section>
  );
};
export default Home;
