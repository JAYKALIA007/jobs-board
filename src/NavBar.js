import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import LoginButton from './Auth/LoginButton'
import LogoutButton from './Auth/LogoutButton'

export default function NavBar(){
    const { user , isAuthenticated , isLoading } = useAuth0();
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f4f4f4',
          boxShadow: theme.shadows[1],
        },
      }));
    return(
        <div className="max-w-full text-gray-200 bg-gradient-to-r from-blue-700 to-blue-300  mobile_s:p-3 md:p-5 flex " >
            <div className=" w-1/2 m-2 " >
                <Link to="/" className="text-2xl " >Jobs Board</Link>
            </div>
            <div className=" w-1/2 m-2" >
                <div className="grid mobile_s:grid-cols-3 sm:grid-cols-5 lg:grid-cols-6  text-center">
                    {/* the following divs are used for creating columns */}
                    <div className=" mobile_s:hidden sm:hidden lg:block" ></div> 
                    <div className=" mobile_s:hidden sm:block " ></div>
                    <div className=" mobile_s:hidden sm:block "></div>
                    <div></div>
                    {/* above divs used for spacing */}
                    <div>
                        {isAuthenticated && 
                            (
                                <LightTooltip title={<h5 className="text-xs text-slate-600 font-thin italic" >View Profile</h5>} enterDelay={200} leaveDelay={200} arrow>
                                    <Link to={`/profile/u=${user.sub.split('|')[1]}`}>
                                        <img src={user.picture} alt="user profile" 
                                            className="border-2 rounded-full drop-shadow-md	 inline hover:drop-shadow-2xl  hover:border-gray-100 mobile_s:w-8 sm:w-10 " 
                                            />
                                    </Link>
                                </LightTooltip>
                            )
                        }
                    </div>
                    <div className="inline">
                        {!isLoading && (
                            <>
                                <LoginButton />
                                <LogoutButton />
                            </>
                        )}
                        {isLoading && (<p className="text-underline px-10 hover:underline underline-offset-2">Loading...</p>)}
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
