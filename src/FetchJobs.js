import axios from "axios";
import { useState , useEffect } from "react";
import Jobs from "./Jobs"
import Categories from './Categories'
import SearchBar from './SearchBar'
export default function FetchJobs(){
    const [jobs, setJobs] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    function callback(response){
        if(response === 'No category selected')
        {
            setFilterIsActive(false);
        }
        else{
            setFilterIsActive(true)
            setJobs(response.jobs)
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
                <Jobs jobs={jobs}/>
            </div>
            <div className="w-1/4 m-8" >
                <SearchBar />
                <Categories callback={callback} />
            </div>
        </div>
    )
}