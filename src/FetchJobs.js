import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
import Categories from './Categories'
import SearchBar from './SearchBar'
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const [searchIsActive , setSearchIsActive] = useState(false)
    const [jobsFound , setJobsFound] = useState(true)
    const [offsetValue, setOffsetValue] = useState(0)
    const [offsetValueSearch, setOffsetValueSearch] = useState(0)
    const [offsetValueFilter, setOffsetValueFilter] = useState(0)

    const [searchTerm,setSearchTerm] = useState('')
    function callback(response){
        if(response === 'No category selected')
        {
            setFilterIsActive(false);
        }
        else{
            setFilterIsActive(true)
            if(response === 'No jobs found. Please change search term.'){
                setJobsFound(false)
            }
            else{
                setJobs(response.jobs)
                setJobsFound(true)
            }
        }
    }
    function callbackSearchTerm(searchTerm , isActive){
            setSearchIsActive(isActive ? true : false )
            setSearchTerm(searchTerm)
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
            console.log("search is active")
            axios.get(`https://remotive.com/api/remote-jobs?search=${searchTerm}&limit=10&offset=${offsetValueSearch}`)
            .then(res=>{
                setJobs(res.data.jobs)
                window.scrollTo(0, 0);
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else if(filterIsActive && !searchIsActive) {
            console.log("filter is active")
            // setJobs([])
        }
    },[filterIsActive , offsetValue, offsetValueSearch, searchIsActive  , searchTerm])

    function handleNextPage(){
        if(!filterIsActive && !searchIsActive)
            setOffsetValue(offsetValue+10)
        else if(!filterIsActive && searchIsActive)
            setOffsetValueSearch(offsetValueSearch+10)
        else if(filterIsActive && !searchIsActive)
            setOffsetValueFilter(offsetValueFilter+10)

        // window.scrollTo(0, 0);
    }
    function handlePrevPage(){
        if(!filterIsActive && !searchIsActive)
            setOffsetValue(offsetValue-10)
        else if(!filterIsActive && searchIsActive)
            setOffsetValueSearch(offsetValueSearch-10)
        else if(filterIsActive && !searchIsActive)
            setOffsetValueFilter(offsetValueFilter-10)
        // window.scrollTo(0, 0);
    }
    return(
        <div className="flex" >
            <div className="w-3/4 ">
                {jobsFound && 
                <> 
                    <Jobs jobs={jobs}/>
                    <div className="text-center" >
                        { !filterIsActive && !searchIsActive && (
                        <>
                            <button className="bg-gradient-to-r from-blue-600 to-blue-400 
                                            hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  
                                            rounded-md  hover:scale-105 duration-100 text-gray-100 my-5 mx-2 " 
                                    onClick={handleNextPage}
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
                        { !filterIsActive && searchIsActive && (
                        <>
                            <button className="bg-gradient-to-r from-blue-600 to-blue-400 
                                            hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  
                                            rounded-md  hover:scale-105 duration-100 text-gray-100 my-5 mx-2 " 
                                    onClick={handleNextPage}
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
                <SearchBar  callback={callback} callbackSearchTerm={callbackSearchTerm} />
                <Categories callback={callback} />
            </div>
        </div>
    )
}