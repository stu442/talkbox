import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './utilities.css';
import Login from './page/Login/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
