export default function JobDetailsForm({ nextPage , prevPage, handleChange , formFields, handleAddRowToJobExpForm}){
    return(
        <div className="flex text-gray-600" >
            <div className="mobile_s:w-1/5 sm:w-1/4" >

            </div>
            <div className="mobile_s:w-3/5 sm:w-2/4" >
                <h2 className="text-center font-bold text-2xl italic mt-5" >Job Ex Info</h2>

                <form  className="px-30 mt-10"  >
                    {
                        formFields.jobExperienceInfo.map(jobExInfo=>{
                            return(
                                <div key={jobExInfo.id}  >
                                    <label className="relative block">
                                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                                        block bg-white w-full border border-slate-300 
                                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                                        focus:border-sky-500 focus:ring-sky-500 
                                                        focus:ring-1 text-sm" 
                                                placeholder="noOfYears" 
                                                type="number" name="noOfYears"
                                                onChange={event=>{handleChange(jobExInfo.id , event)}}
                                                value={jobExInfo.noOfYears}
                                                />
                                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                                        block bg-white w-full border border-slate-300 
                                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                                        focus:border-sky-500 focus:ring-sky-500 
                                                        focus:ring-1 text-sm" 
                                                placeholder="designation" 
                                                type="text" name="designation"
                                                onChange={event=>{handleChange(jobExInfo.id , event)}}
                                                value={jobExInfo.designation}
                                                />
                                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                                        block bg-white w-full border border-slate-300 
                                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                                        focus:border-sky-500 focus:ring-sky-500 
                                                        focus:ring-1 text-sm" 
                                                placeholder="companyName" 
                                                type="text" name="companyName"
                                                onChange={event=>{handleChange(jobExInfo.id , event)}}
                                                value={jobExInfo.companyName}
                                                />            
                                    </label>
                                </div>
                            )
                        })
                    }
                </form>

                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 m-1 mobile_s:text-sm sm:text-base" value={formFields.formNo} onClick={prevPage}>Previous</button>
                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 m-1 mobile_s:text-sm sm:text-base" value={formFields.formNo} onClick={nextPage}>Next</button>
                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 m-1 mobile_s:text-sm sm:text-base" onClick={event=>{handleAddRowToJobExpForm('job experience form')}}>Add More Info</button>

                <div className="text-center my-5" >
                    <li>1</li>
                    <li>2</li>
                    <li className="active">3</li>
                </div>
            </div>

            <div className="mobile_s:w-1/5 sm:w-1/4" >

            </div>
        </div>
)
}