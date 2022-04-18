export default function FinalConfirmationForm( { prevPage , formFields , handleSubmit , isSubmitted }){
    function prevPageCallback(){
        prevPage()
        prevPage()
    }
    return(
        <div className="flex text-gray-600 " >
            <div className="w-1/4" >

            </div>
            
            <div className="w-2/4" >
                <div className="my-4" >
                    <h2 className=" font-bold text-left underline italic " >Personal Information</h2>
                    <label className="font-bold text-sm text-left " > Name </label> {formFields.firstName} {formFields.lastName} <br/>
                    <label className="font-bold text-sm text-left " > DOB </label>{formFields.dob} <br/>
                    <label className="font-bold text-sm text-left " > Address </label>{formFields.address} <br/>
                </div>

                <div className="my-4" >
                    <h2 className=" font-bold text-left underline italic " >Education details</h2>
                    <label className="font-bold text-sm text-left " > Highest Education </label>{formFields.highestEducation} <br/>
                    <label className="font-bold text-sm text-left " > Institute </label>{formFields.institutionName} <br/>
                    <label className="font-bold text-sm text-left " > Branch </label>{formFields.branch} <br/>
                    <label className="font-bold text-sm text-left " > Grade </label>{formFields.grade} <br/>
                </div>
                
                <div className="my-4" >
                    <h2 className=" font-bold text-left underline italic " >Job experience details</h2>
                    <label className="font-bold text-sm text-left " > No of Years </label>{formFields.noOfYears} <br/>
                    <label className="font-bold text-sm text-left " > Designation </label>{formFields.designation} <br/>
                    <label className="font-bold text-sm text-left " > Company Name </label>{formFields.companyName} <br/>
                </div>
                <button className={`text-gray-100 px-3 py-1  rounded-md  m-1 ${ !isSubmitted ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} onClick={prevPageCallback} disabled={isSubmitted}>Go back and Edit </button> 
                <button  className={`text-gray-100 px-3 py-1  rounded-md  m-1 ${ !isSubmitted ? "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600    hover:scale-105 duration-100" : "bg-blue-300"}`} disabled={isSubmitted} onClick={handleSubmit}>Submit</button>
            </div>

            <div className="w-1/4" >

            </div>

        </div>
    )
}


