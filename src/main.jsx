import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router/dom';
import ContextProvider from './Context/AuthProvider/ContextProvider.jsx';
import { ToastContainer } from 'react-toastify';
import AnimatedCursor from './Components/AnimatedCursor/AnimatedCursor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <AnimatedCursor></AnimatedCursor>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </ContextProvider>
  </StrictMode>
);
