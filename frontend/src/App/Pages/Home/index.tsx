//~ Imports Modules
import './Styles/main.scss';
import { Spinner } from '../../Components/IndexComponents';

//~ Component
const Home = () => {
  return (
    <section className="home">
      <h1>Hello from Home page</h1>
      <Spinner />
    </section>
  );
};
export default Home;
