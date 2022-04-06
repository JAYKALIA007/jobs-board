import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        axios.get(`https://remotive.io/api/remote-jobs?limit=10`)
        .then(res=>{
            // console.log(res.data.jobs);
            setJobs(res.data.jobs);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <p>Fetch jobs</p>
            <Jobs jobs={jobs}/>
        </div>
    )
}