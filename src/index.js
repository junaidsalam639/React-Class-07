import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

