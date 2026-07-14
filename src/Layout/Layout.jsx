import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div
      className="
        flex min-h-screen
        bg-gray-100 text-gray-900
        dark:bg-gray-950 dark:text-gray-100
      "
    >
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />

        <main
          className="
            flex-1
            bg-gray-50 p-8
            dark:bg-gray-800
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}