export default function StudyDetailsForm({ nextPage , prevPage, handleChange , formFields}){
    function nextPageCallback(){
        nextPage()
        nextPage()
    }
    function prevPageCallback(){
        prevPage()
        prevPage()
    }
    return(
        <div className="flex text-gray-600" >
            <div className="w-1/4" >

            </div>
            <div className="w-2/4" >
                <h2 className="text-center font-bold text-2xl italic " >Study Details</h2>

                <form  className="px-30"  >
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="highestEducation" 
                                type="text" name="highestEducation"
                                onChange={handleChange}
                                value={formFields.highestEducation}
                                />
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="institutionName" 
                                type="text" name="institutionName"
                                onChange={handleChange}
                                value={formFields.institutionName}
                                />
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="branch" 
                                type="text" name="branch"
                                onChange={handleChange}
                                value={formFields.branch}
                                />   
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="grade" 
                                type="text" name="grade"
                                onChange={handleChange}
                                value={formFields.grade}
                                />             
                    </label>
                </form>

                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 m-1" onClick={prevPageCallback}>Previous</button>
                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  hover:scale-105 duration-100 m-1" onClick={nextPageCallback}>Next</button>
            </div>

            <div className="w-1/4" >

            </div>
        </div>
    )
}