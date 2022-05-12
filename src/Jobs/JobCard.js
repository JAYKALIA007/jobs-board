import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

export default function JobCard( { title, description, company_name, salary, tags, id, category  }){

    const { isAuthenticated } = useAuth0();

    const [ showDetails , setShowDetails ] = useState(false)
    function handleShowDetails(){
        setShowDetails(!showDetails)
    }
    const shortDescription = description.split('. ')[0].substring(0,100) + `...`
    let showMoreButtonText = showDetails ? `Show Less` : `Show More`
    function handleAlertClick(){
        alert('JOBS BOARD wants you to Login to continue.')
    }
    const details = showDetails ? description : shortDescription;
    return(
        <div  >
            
            <div className=" text-gray-600 bg-white rounded-xl mobile_s:mx-5 mobile_s:px-5 sm:px-10 py-5 sm:mx-20 my-5 drop-shadow-xl hover:drop-shadow-2xl ">
                <h3 className=" text-xl font-bold " >{title}</h3>
                <h3 className=" font-bold " >{company_name}</h3>
                <p>{details}</p>
                <div >
                    <p className="inline-block " >Salary : </p> &nbsp;
                    <p className="font-bold inline-block" >{salary}</p> 
                    <br/>
                    <div className="inline-block " > Category :
                    <p className=" inline-block px-5 text-blue-700 font-bold bg-slate-200 rounded-md m-1" >
                                            {category}
                    </p>
                </div>
                </div>
                <div className="flex" >
                    <div className="w-5/6 " >
                        {tags.map(tag =>{
                            return(
                                <div className="inline-block bg-slate-100 rounded-md m-1 " key={Math.random()} >
                                    <p className="px-2 text-blue-600 " >
                                        {tag}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="  w-1/6 text-gray-100 text-right  " > 
                        <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 text-sm sm:text-base" onClick={handleShowDetails}  >
                            {showMoreButtonText}
                        </button>
                        {/* if user signed in then redirect to apply form */}
                        {
                            isAuthenticated && showDetails && 
                            <Link to={`/apply/jobId=${id}`} >
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 mt-12 text-sm sm:text-base" > Apply </button>
                            </Link>
                        }
                        {/* if user not signed in then alert message */}
                        {
                            !isAuthenticated && showDetails && 
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 mt-12 text-sm sm:text-base" onClick={handleAlertClick}> Apply </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}