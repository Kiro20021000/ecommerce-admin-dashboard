import React, { createContext, useState } from 'react'
import StatCard from '../components/StatCard'
import { useProduct } from '../context/ProductContext'

export default function Dashboard() {

  const { products, categories } = useProduct();
  const averagePrice = products.reduce((acc, product) => acc + product.price,0) / products.length || 0;
  const totalStock = products.reduce((acc, product) => acc + product.stock, 0) || 0;
  return (
    <>
      <h1 className='text-3xl font-bold text-start'>Overview</h1>
      <h3 className='text-sm text-start text-gray-400 mt-2'>A quick snapshot of your store.</h3>
      <div className='mt-4 grid grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
      <StatCard title="Total Products" value= {products.length} />
      <StatCard title="Categories" value= {categories.length} />
        <StatCard title="Average Price" value={averagePrice.toFixed(2)} />
      <StatCard title="Total Stock" value= {totalStock} />
      </div>
      <h3 className="mb-3 mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Recently added
        </h3>
      <div
        className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        
        {products.slice(0, 6).map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center gap-3 rounded-xl
               border border-gray-200
               bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              
              <div>
                <img src={product.thumbnail} alt={product.title}
                className="h-12 w-12 rounded-lg object-cover"
                ></img>
              </div>
              <div>
                <h1>{product.title}</h1>
                <p
                className="text-sm text-gray-500 dark:text-gray-400"
                >{product.price}</p>
              </div>
              
            </div>
            
            )
          })}
      </div>
    </>
  )
}
