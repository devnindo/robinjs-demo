/***
 *  NEED TO BE GENERATED
 * */


import '@/css/app.css'


import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoot from './app-root.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routeIndex from './route-index.tsx'
import {RobinThemeProvider} from "@robin/theme";


const router = createBrowserRouter(routeIndex);

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
      <RobinThemeProvider>
        <RouterProvider router={router} />
      </RobinThemeProvider>
      {/* <AppRoot />*/}
  </React.StrictMode>,
)
