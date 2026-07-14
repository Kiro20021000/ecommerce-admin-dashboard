import React from 'react'

export default function StatCard({title , value}) {

    
  return (
    <>
          <div className='rounded-lg border border-gray-300 
      shadow-sm p-5 bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white
      '>
              <h2 className='text-sm text-gray-500 dark:text-gray-400'>{title}</h2>
              <p className='mt-2 font-bold text-2xl text-gray-900 dark:text-white'>{ value}</p>
      </div>
    </>
  )
}
