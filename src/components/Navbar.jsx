import React from 'react'
import { useTheme } from '../context/ThemeContext'
export default function Navbar() {

  const { theme , toggleTheme } = useTheme();
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between
    dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500">
      <div>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your store data
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}
          className='rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'  }
        </button>
      </div>
    </header>
  )
}
