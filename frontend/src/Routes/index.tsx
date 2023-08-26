//~ Import modules
import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import Router from './Routes';

//~ Export routes
export const mainRoutes = Router.map(({ mainPath, mainElement }) => <Route key={uuid()} path={mainPath} element={mainElement} />);
