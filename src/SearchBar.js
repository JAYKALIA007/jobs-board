import { useState } from "react"
export default function SearchBar( { callback , callbackSearchTerm }){
    const [searchTerm , setSearchTerm] = useState('')
    const [searchIsActive , setSearchIsActive] = useState(false)
    function handleSubmit(e){
        callbackSearchTerm(searchTerm,true)
        e.preventDefault();
        setSearchIsActive(true)
    }
    function handleChange(e){
        setSearchTerm(e.target.value)
    }
    function handleGoBack(){
        setSearchTerm('')
        callbackSearchTerm('',false)
        setSearchIsActive(false)    
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <input className="placeholder:italic placeholder:text-slate-400 
                                    block bg-white w-full border border-slate-300 
                                    rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                    focus:border-sky-500 focus:ring-sky-500 
                                    focus:ring-1 sm:text-sm" 
                            placeholder="Search for anything..." 
                            type="text" name="search"
                            onChange={handleChange}
                            value={searchTerm}
                            />
                </label>
            </form>
            {searchIsActive && (
                <button  className="text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 mt-5"  
                onClick={handleGoBack} >
                    Clear
                </button>
                )
            }
        </>
    )
}