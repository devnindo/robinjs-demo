/***
 *  NEED TO BE GENERATED
 * */


import '@/css/app.css'


import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoot from './app-root.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routeIndex from './route-index.tsx'


const router = createBrowserRouter(routeIndex);

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/* <AppRoot />*/}
  </React.StrictMode>,
)
