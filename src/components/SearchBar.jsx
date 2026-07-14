import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:w-72">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Products..."
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-700
        dark:border-gray-600
        dark:bg-gray-800
        dark:text-white
        dark:placeholder:text-gray-500
        outline-none focus:border-blue-500"
      />
    </div>
  )
}