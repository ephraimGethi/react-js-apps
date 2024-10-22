import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Profiles from './Profiles';
import ProfilePage from './ProfilePage';



 const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/app',
    element:<App/>,
    
  },
  {
    path:'/profiles',
    element:<Profiles/>,
    children:[
    {
      path:'/profiles/:profileId',
      element:<ProfilePage/>,
      
    },]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
