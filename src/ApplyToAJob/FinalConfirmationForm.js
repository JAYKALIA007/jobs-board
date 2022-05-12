export default function FinalConfirmationForm( { prevPage , formFields , handleSubmit , isSubmitted }){
    return(
        <div className="flex text-gray-600 " >
            <div className="mobile_s:w-1/5 sm:w-1/4" >

            </div>
            <div className="mobile_s:w-3/5 sm:w-2/4" >
                <h2 className=" my-5 font-bold text-center underline italic " >Personal Information</h2>
                <div className="text-gray-600 bg-white rounded-xl p-4 my-5 sm:mx-32 drop-shadow-md hover:drop-shadow-xl">
                    <label className="font-bold text-sm  " > Name </label> {formFields.userInfo.firstName} {formFields.userInfo.lastName} <br/>
                    <label className="font-bold text-sm  " > DOB </label>{formFields.userInfo.dob} <br/>
                    <label className="font-bold text-sm  " > Address </label>{formFields.userInfo.address} <br/>
                </div>
                <div className="my-4" >
                    <h2 className=" font-bold text-center underline italic " >Education details</h2>
                {   
                    formFields.educationInfo.map(edInfo=>{
                        return(
                            <div className=" text-gray-600 bg-white rounded-xl p-4 my-5 sm:mx-32 drop-shadow-md hover:drop-shadow-xl "  key={edInfo.id}>
                                <label className="font-bold text-sm  " > Highest Education </label>{edInfo.highestEducation} <br/>
                                <label className="font-bold text-sm  " > Institute </label>{edInfo.institutionName} <br/>
                                <label className="font-bold text-sm  " > Branch </label>{edInfo.branch} <br/>
                                <label className="font-bold text-sm  " > Grade </label>{edInfo.grade} <br/>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className="my-4" >
                    <h2 className=" font-bold text-center underline italic " >Job experience details</h2>
                    {
                        formFields.jobExperienceInfo.map(jobExInfo=>{
                            return(
                                <div className="text-gray-600 bg-white rounded-xl p-4 my-5 sm:mx-32 drop-shadow-md hover:drop-shadow-xl " key={jobExInfo.id}>
                                    <label className="font-bold text-sm  " > No of Years </label>{jobExInfo.noOfYears} <br/>
                                    <label className="font-bold text-sm  " > Designation </label>{jobExInfo.designation} <br/>
                                    <label className="font-bold text-sm  " > Company Name </label>{jobExInfo.companyName} <br/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center" >
                    <button className={`mobile_s:text-sm text-base text-gray-100 px-3 py-1 rounded-md  m-1 ${ !isSubmitted ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`}  value={formFields.formNo} disabled={isSubmitted} onClick={prevPage}>Go back and Edit </button> 
                    <button  className={`mobile_s:text-sm text-base text-gray-100 px-3 py-1 rounded-md  m-1 ${ !isSubmitted ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} disabled={isSubmitted} onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div className="mobile_s:w-1/5 sm:w-1/4" >

            </div>

        </div>
    )
}


