//~ Import modules
import { Navigate } from 'react-router-dom';
import { NoPage, Home, Dashboard } from '../App/Pages/IndexPages';

const Router = [
  // Alphabetical order A-Z
  { name: 'dashboard', mainPath: '/dashboard', mainElement: <Dashboard /> },
  { name: 'home', mainPath: '/', mainElement: <Home /> },

  // Handle bad request url errors
  { name: 'nopage', mainPath: '/404', mainElement: <NoPage /> },
  { name: 'noPage-redirect', mainPath: '/*', mainElement: <Navigate to="/404" /> },
];

export default Router;