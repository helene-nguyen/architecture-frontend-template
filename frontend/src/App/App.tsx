//~ Import modules
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from '../Routes';
import Layout from './Layout/MainLayout';

//~ Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(!isLoading), 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {mainRoutes}
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
