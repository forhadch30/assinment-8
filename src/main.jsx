import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// frist-1
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Man from './components/Man/Man';
import ErrorPage from './components/ErrorPage/ErrorPage';
// second -2
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/mans/:id",
        element: <Man></Man>,
        loader: ()=>fetch('/data.json')
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
