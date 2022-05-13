import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react'
import AppliedJobs from "./AppliedJobs";
import UserInfo from "./UserInfo";
export default function Profile(){
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ noOfAppliedJobs , setNoOfAppliedJobs] = useState(0)
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  function callbackFromAppliedJobs(num){
    setNoOfAppliedJobs(num)
  }
  return (
    isAuthenticated && (
      <div className="sm:flex text-gray-600" >
        <div className="sm:w-1/3  mobile_s:my-2  sm:my-5 sm:p-5" >
          <div className="p-5">
            <img className = "rounded-full mobile_s:w-32 sm:w-48" src={user.picture} alt={user.name} />
          </div>
          <div className="px-10">
            <h2 className="text-2xl font-semibold text-black">{user.name}</h2>
            <p className="text-xl mb-5" >{user.nickname}</p>
            <hr/>
            <p className="text-sm m-1" >{user.email}</p>
          </div>
        </div>
        <div className="sm:w-2/3 p-5" >
          <AppliedJobs user={user} callbackToProfile={callbackFromAppliedJobs} />
          { ( noOfAppliedJobs > 0 ) ? <UserInfo  user={user} /> : <p className="text-2xl my-10">No user info found</p>}
        </div>
      </div>
    )
  )
}