import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
;
import { Provider } from 'react-redux'; 
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import store from './store/store.js';
import Dashboard from './pages/Dashboard.jsx';
import Expense from './pages/Expense.jsx';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Route to render Homepage
        element: <Dashboard/>,
      },
      {
        path: 'expanses', // Route to render Homepage
        element: <Expense/>
      },
      {
        path: '/signup', // Route to render signup
        element: <Signup  />
      },
      {
        path: '/login', // Route to render Login
        element: <Login />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Providing the Redux store */}
      <RouterProvider router={router} />  {/* Providing the router configuration */}
      <ToastContainer />
    </Provider>
  </StrictMode>
);
