import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
import Categories from '../CategoryFilter/Categories'
import SearchBar from '../SearchBar'
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const [searchIsActive , setSearchIsActive] = useState(false)
    const [jobsFound , setJobsFound] = useState(true)
    const [offsetValue, setOffsetValue] = useState(0)
    const [offsetValueSearch, setOffsetValueSearch] = useState(0)
    const [offsetValueFilter, setOffsetValueFilter] = useState(0)

    const [searchTerm,setSearchTerm] = useState('')
    const [filterTerm,setFilterTerm] = useState('')

    function callbackSearchTerm(searchTerm , isActive){
            setSearchIsActive(isActive ? true : false )
            setSearchTerm(searchTerm)
    }
    function callbackFilterTerm(myFilterTerm ){
            setFilterTerm(myFilterTerm)
            setFilterIsActive(myFilterTerm !=='' ? true : false)
            setOffsetValueFilter(0)
    }
    useEffect(()=>{
        if(!filterIsActive && !searchIsActive){
            axios.get(`https://remotive.io/api/remote-jobs?limit=10&offset=${offsetValue}`)
            .then(res=>{
                setJobs(res.data.jobs)
                window.scrollTo(0, 0);
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else if(searchIsActive && !filterIsActive){
            axios.get(`https://remotive.com/api/remote-jobs?search=${searchTerm}&limit=10&offset=${offsetValueSearch}`)
            .then(res=>{
                setJobsFound(res.data.jobs.length > 0 ? true : false)
                setJobs(res.data.jobs)
                window.scrollTo(0, 0);
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else if(filterIsActive && !searchIsActive) {
            axios.get('http://127.0.0.1:5000/category_filter',{ params : {filterTerm :filterTerm , offsetValue : offsetValueFilter } })
                        .then(res=>{
                            setJobs(res.data.jobs)
                            window.scrollTo(0, 0);
                        })
                        .catch(err=>{console.log(err)})
            setJobs([])
        }
    },[filterIsActive , offsetValue, offsetValueSearch, offsetValueFilter, searchIsActive  , searchTerm , filterTerm])

    function handleNextPage(){
        if(!filterIsActive && !searchIsActive)
            setOffsetValue(offsetValue+10)
        else if(!filterIsActive && searchIsActive)
            setOffsetValueSearch(offsetValueSearch+10)
        else if(filterIsActive && !searchIsActive)
            setOffsetValueFilter(offsetValueFilter+10)
    }

    function handlePrevPage(){
        if(!filterIsActive && !searchIsActive)
            setOffsetValue(offsetValue-10)
        else if(!filterIsActive && searchIsActive)
            setOffsetValueSearch(offsetValueSearch-10)
        else if(filterIsActive && !searchIsActive)
            setOffsetValueFilter(offsetValueFilter-10)
    }
    return(
        <div className="flex" >
            <div className="w-3/4 ">
                {jobsFound && 
                <> 
                    <Jobs jobs={jobs}/>
                    <div className="text-center" >
                        {/* Default next and previous buttons */}
                        { !filterIsActive && !searchIsActive && (
                        <>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ jobs.length >= 10 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} 
                                    onClick={handleNextPage} disabled={jobs.length < 10}
                            >
                                Next
                            </button>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ offsetValue>0 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`}
                                    disabled={offsetValue <= 0} 
                                    onClick={handlePrevPage}
                            >
                                Back
                            </button>
                        </>
                        )} 
                        {/* Next and prev buttons when search is active */}
                        { !filterIsActive && searchIsActive && (
                        <>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ jobs.length >= 10 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} 
                                    onClick={handleNextPage} disabled={jobs.length < 10}
                            >
                                Next
                            </button>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ offsetValueSearch>0 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`}
                                    disabled={offsetValueSearch <= 0} 
                                    onClick={handlePrevPage}
                            >
                                Back
                            </button>
                        </>
                        )}
                        {/* Next and prev buttons when category filter is active */}
                        { filterIsActive && !searchIsActive && (
                        <>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ jobs.length >= 10 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} 
                                    onClick={handleNextPage} disabled={jobs.length < 10}
                            >
                                Next
                            </button>
                            <button className={`text-gray-100 px-3 py-1 rounded-md  m-1 ${ offsetValueFilter > 0 ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`}
                                    disabled={offsetValueFilter <= 0} 
                                    onClick={handlePrevPage}
                            >
                                Back
                            </button>
                        </>
                        )}
                    </div>
                </> }

                {!jobsFound && (
                    <div className="px-12 py-32 mx-20  my-12 font-bold italic " >
                        <h4 className="text-6xl text-slate-700" >No jobs found.</h4>
                        <h4 className="text-2xl mt-2 text-slate-500">Please change search term.</h4>
                    </div>
                )}
            </div>
            <div className="w-1/4 m-8" >
                <SearchBar  callbackSearchTerm={callbackSearchTerm} />
                <Categories callbackFilterTerm={callbackFilterTerm}/>
            </div>
        </div>
    )
}