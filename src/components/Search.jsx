import React, { useState } from 'react'

function Search({onSumbit}) {
    const [term,setTerm] = useState('')

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        onSumbit(term)
    }
    const handleChange=(e)=>{
        setTerm(e.target.value);
    }
  return (
    <>     
            <form className="max-w-md mx-auto w-full" onSubmit={handleFormSubmit}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={handleChange} value={term} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-green-900 border border-green-300 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search Mockups, Logos..."  />
                    <button  className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-gray-800">Search</button>
                </div>
            </form>
    </>
  )
}

export default Search