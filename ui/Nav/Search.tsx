import React from 'react'

const Search = () => {
    return (
        <div className={"hidden ml-10  w-95 lg:flex border border-gray-300 text-gray-600 rounded-md"}>
            <input type="search" className={" py-2 px-3 w-full focus:outline-0 "} placeholder={"جستجو برای محصول"}/>
        </div>
    )
}
export default Search
