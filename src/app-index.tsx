/***
 *  NEED TO BE GENERATED
 * */


import '@/css/app.css'


import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routeIndex from './main/route-index.tsx'
import {RobinThemeProvider} from "@robin/theme";


const router = createBrowserRouter(routeIndex);

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
      <RobinThemeProvider>
        <RouterProvider router={router} />
      </RobinThemeProvider>
  </React.StrictMode>,
)
