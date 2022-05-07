import { useAuth0 } from "@auth0/auth0-react";
import AppliedJobs from "./AppliedJobs";
import UserInfo from "./UserInfo";
export default function Profile(){
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className="flex text-gray-600" >
        <div className="w-1/3 p-5 m-5" >
          <div className="p-5">
            <img className = "rounded-full" src={user.picture} alt={user.name} width="90%"/>
          </div>
          <div className="px-10">
            <h2 className="text-2xl font-semibold text-black">{user.name}</h2>
            <p className="text-xl mb-5" >{user.nickname}</p>
            <hr/>
            <p className="text-sm m-1" >{user.email}</p>
          </div>
        </div>
        <div className="w-2/3 p-5 m-5" >
          <AppliedJobs user={user} />
          <UserInfo  user={user} />
        </div>

      </div>
    )
  )
}