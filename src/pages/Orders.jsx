import React, { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseURL = 'https://dummyjson.com/carts'

  useEffect(() => {
    async function getOrders() {
      setLoading(true);
      try {
        const response = await axios.get(baseURL);
        setOrders(response.data.carts)
        setLoading(false)
      } catch (err) {
        setError('Something wrong')
      } finally {
        setLoading(false)
      }
    }
    getOrders();
  },[])
  
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <p className='text-red-500'>{ error}</p>
  }

  return (
    <>
      <div>
        <h1 className='text-xl font-bold text-start dark:text-white'>Orders Page</h1>
        <h3 className='text-sm text-start mb-6 mt-2 text-gray-500 dark:text-gray-400'>Recent customer orders.</h3>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          <tr>
            <td className="px-4 py-3 font-medium">Order ID</td>
            <td className="px-4 py-3 font-medium">Items</td>
            <td className="px-4 py-3 font-medium">Quantity</td>
            <td className="px-4 py-3 font-medium">Total</td>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-900">
          {orders.map((order) => {
            return (
               <tr key={order.id} className='hover:bg-gray-50 dark:hover:bg-gray-800'>
            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">#{ order.id}</td>
                 <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{ order.totalProducts}</td>
                 <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{ order.totalQuantity}</td>
                 <td className="px-4 py-3 text-gray-600 dark:text-gray-300">${ order.total}</td>
              </tr>
            )
          })}
         
        </tbody>
        </table>
        </div>
    </>
  )
}
