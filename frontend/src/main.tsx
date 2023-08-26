//& Imports Modules
import './Assets/sass/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './Store';
import App from './App/App';
//& API Provider
// import { ApiProvider } from '@reduxjs/toolkit/query/react';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <ApiProvider api={apiSlice}> */}
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      {/* </ApiProvider> */}
    </BrowserRouter>
  </StrictMode>
);