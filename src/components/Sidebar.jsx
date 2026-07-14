import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
return (

    <>
        <aside className="min-h-screen w-48 bg-gray-100 p-4
            dark:border-gray-700 dark:bg-gray-800
    ">
    <div className="flex flex-col gap-4 mt-4">
                <NavLink to={'/'} className='hover:bg-gray-400 hover:rounded-md
        transition-all duration-300
    '> 📊 Dashboard</NavLink>
                <NavLink to={'/products'} className='hover:bg-gray-400 hover:rounded-md
    transition-all duration-300
    '>📦 Products</NavLink>
                <NavLink to={'/orders'} className='hover:bg-gray-400 hover:rounded-md
    transition-all duration-300
    '>🧾 Orders</NavLink>
        </div >
        </aside>
        </>
        
    )
}
