import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Context from './Context/Context.jsx'
import ViewColor from "./Pages/ViewColor";
import UpdateColor from "./Pages/UpdateColor";
import Color from "./Pages/Color";
import UpdateSizes from "./Pages/UpdateSizes";
import AddSizes from "./Pages/AddSizes";
import ViewSizes from "./Pages/ViewSizes";

import AddPCategory from "./Pages/AddPCategory"
import ViewPCategory from "./Pages/ViewPCategory"
import UpdatePCategory from "./Pages/UpdatePCategory"

import AddProduct from "./Pages/AddProduct"
import ViewProduct from "./Pages/ViewProduct"
import UpdateProduct from "./Pages/UpdateProduct"

import AddCategory from "./Pages/AddCategory"
import ViewCategory from "./Pages/ViewCategory"
import UpdateCategory from "./Pages/UpdateCategory"

import Profile from "./Pages/Profile"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [

      { path: '', element: <Home /> },
      { path: 'color/add-colors', element: <Color /> },
      { path: 'color/view-colors', element: <ViewColor /> },
      { path: 'color/update-colors', element: <UpdateColor /> },
      { path: 'profile', element: <Profile /> },
      { path: 'size/add-sizes', element: <AddSizes /> },
      { path: 'size/view-sizes', element: <ViewSizes /> },
      { path: 'sizes/update-size', element: <UpdateSizes /> },

      { path: 'category/add-category', element: <AddCategory /> },
      { path: 'category/view-category', element: <ViewCategory /> },
      { path: 'category/update-category/:_id', element: <UpdateCategory /> },

      { path: 'products/add-category', element: <AddPCategory /> },
      { path: 'products/view-category', element: <ViewPCategory /> },
      { path: 'products/update-category', element: <UpdatePCategory /> },

      { path: 'products/add-product', element: <AddProduct /> },
      { path: 'products/view-product', element: <ViewProduct /> },
      { path: 'products/update-product', element: <UpdateProduct /> },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={routes} />
    </Context>
  </StrictMode>,
)
