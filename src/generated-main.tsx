/***
 *  NEED TO BE GENERATED
 * */

import './css/index.css'
import './css/App.css'


import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoot from './app-root.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routeIndex from './root-route-index'

const router = createBrowserRouter(routeIndex);

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
)
