import { Link } from 'react-router-dom'
import LoginButton from './Auth/LoginButton'
import LogoutButton from './Auth/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function NavBar(){
    const { isLoading } = useAuth0();

    return(
        <div className="max-w-full text-gray-200 bg-gradient-to-r from-blue-700 to-blue-300  p-5 flex " >
            <div className=" w-1/2 m-2 " >
                <Link to="/" className="text-2xl " >Jobs Board</Link>
            </div>
            <div className=" w-1/2 m-2 text-right" >
                {/* style the navbar with grid cols so that it's responsive */}
                {!isLoading && (
                    <div>
                        <LoginButton />
                        <LogoutButton />
                    </div>
                )}
                {isLoading && (<p className="text-underline px-10 hover:underline underline-offset-2">Loading...</p>)}
                
            </div>
        </div>
    )
}