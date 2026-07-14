import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'
import Layout from '../Layout/Layout'

const Routes = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Dashboard /> },
            { path: 'products', element: <Products /> },
            { path: 'orders', element: <Orders /> },
            {path : '*' , element : <NotFound />}
    ]}
])


export default function AppRouting() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}
