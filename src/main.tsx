import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledEngineProvider } from '@mui/material';

import App from './App';
import './theme/reset.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
    <ToastContainer />
  </React.StrictMode>
);
