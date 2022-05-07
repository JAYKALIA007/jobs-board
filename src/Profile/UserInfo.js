import  { useState , useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import PersonalInfo from './PersonalInfo'
import EdInfo from './EdInfo'
import JobExInfo from './JobExInfo';
export default function UserInfo(){
    const  { user } = useAuth0();
    const  [userInfo , setUserInfo] = useState()
    const userUUID = user.sub.split('|')[1] 
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/get_current_user_info' , {params : {  userUUID : userUUID }} )
        .then(res=>{
            // console.log(res.data)
            setUserInfo(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
        return(
        <>
            <PersonalInfo userInfo = {userInfo} />
            <hr/>
            <EdInfo userInfo = {userInfo} />
            <hr/>
            <JobExInfo userInfo = {userInfo} />
        </>
    )
}