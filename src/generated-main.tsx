/***
 *  NEED TO BE GENERATED
 * */

import './css/app.scss'


import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoot from './app-root.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routeIndex from './route-index.ts'

const router = createBrowserRouter(routeIndex);

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
)
