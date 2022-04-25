import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
import Categories from './Categories'
import SearchBar from './SearchBar'
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const[ jobsFound , setJobsFound] = useState(true)
    function callback(response){
        if(response === 'No category selected')
        {
            setFilterIsActive(false);
        }
        else{
            setFilterIsActive(true)
            if(response === 'No jobs found. Please change search term.'){
                // setJobs([])
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
            axios.get(`https://remotive.io/api/remote-jobs`)
            .then(res=>{
                setJobs(res.data.jobs);
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[filterIsActive])

    return(
        <div className="flex" >
            <div className="w-3/4 ">
                {jobsFound && <Jobs jobs={jobs}/>}
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