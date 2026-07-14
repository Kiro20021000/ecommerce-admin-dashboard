import React from 'react'

export default function FilterDropDown({value,categories ,onChange}) {
return (
    <>
        <select
            className='w-full rounded-lg border border-gray-300 px-4 py-2 mb-3 outline-none 
            dark:border-gray-600
            dark:bg-gray-800
            dark:text-white
            dark:placeholder:text-gray-500'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        
        >
            <option key = 'all' value='all'>All Categories</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
    </select>
    </>
)
}
