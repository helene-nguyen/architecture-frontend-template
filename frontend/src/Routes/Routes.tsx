//~ Import modules
import { Navigate } from 'react-router-dom';
import { NoPage, Home, Dashboard, SignIn } from '../App/Pages/IndexPages';

const mainRouter = [
  // Alphabetical order A-Z
  { name: 'home', mainPath: '/', mainElement: <Home /> },
  { name: 'signin', mainPath: '/signin', mainElement: <SignIn /> },
  
  // Handle bad request url errors
  { name: 'nopage', mainPath: '/404', mainElement: <NoPage /> },
  { name: 'noPage-redirect', mainPath: '/*', mainElement: <Navigate to="/404" /> },
];

const protectedRouter = [
  { name: 'dashboard', display: true, protectedPath: '/dashboard', protectedElement: <Dashboard /> },
  { name: 'profile', protectedPath: '/profile', protectedElement: <Dashboard /> },
];

export { mainRouter, protectedRouter };
