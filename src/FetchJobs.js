import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
import Categories from './Categories'
import SearchBar from './SearchBar'
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const[ jobsFound , setJobsFound] = useState(true)
    const [offsetValue, setOffsetValue] = useState(0)
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
    useEffect(()=>{
        if(!filterIsActive){
            axios.get(`https://remotive.io/api/remote-jobs?limit=10&offset=${offsetValue}`)
            .then(res=>{
                setJobs(res.data.jobs)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[filterIsActive , offsetValue])

    function handleNextPage(){
        setOffsetValue(offsetValue+10)
        window.scrollTo(0, 0);
    }
    function handlePrevPage(){
        setOffsetValue(offsetValue-10)
        window.scrollTo(0, 0);
    }
    return(
        <div className="flex" >
            <div className="w-3/4 ">
                {jobsFound && 
                <> 
                    <Jobs jobs={jobs}/>
                    <div className="text-center" >
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
                <SearchBar  callback={callback} />
                <Categories callback={callback} />
            </div>
        </div>
    )
}