//~ Import modules
import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import { mainRouter, protectedRouter } from './Routes';

//~ Export routes
export const mainRoutes = mainRouter.map(({ mainPath, mainElement }) => <Route key={uuid()} path={mainPath} element={mainElement} />);

export const protectedRoutes = protectedRouter.map(({ protectedPath, protectedElement }) => <Route key={uuid()} path={protectedPath} element={protectedElement} />);