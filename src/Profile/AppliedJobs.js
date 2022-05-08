import axios from "axios";
import { useState  , useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react'
export default function AppliedJobs(){
    const [ noOfAppliedJobs , setNoOfAppliedJobs] = useState(0)
    const  { user } = useAuth0();
    const userUUID = user.sub.split('|')[1] 
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/get_applied_jobs' , {params : {  userUUID : userUUID }} )
        .then((response) => {
            setNoOfAppliedJobs(response.data.length);
        })
        .catch((err) => {console.log(err)});
    },[])
    return(
        <>
            <p className="text-4xl font-bold italic" >No of applied jobs : {noOfAppliedJobs}</p>
        </>
    )
}