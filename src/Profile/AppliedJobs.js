import axios from "axios";
import { useState  , useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react'
export default function AppliedJobs( { callbackToProfile } ){
    const [ noOfAppliedJobs , setNoOfAppliedJobs] = useState(0)
    const  { user } = useAuth0();
    const userUUID = user.sub.split('|')[1] 
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/get_applied_jobs' , {params : {  userUUID : userUUID }} )
        .then((response) => {
            setNoOfAppliedJobs(response.data.length);
            callbackToProfile(response.data.length)
        })
        .catch((err) => {console.log(err)});
    },[])
    return(
        <>
            <p className=" mobile_s:text-2xl sm:text-4xl font-bold italic" >No of applied jobs : {noOfAppliedJobs}</p>
        </>
    )
}