export default function UserDetailsForm({ nextPage , handleChange , formFields}){
    
    return(
        <div className="flex text-gray-600" >
            <div className="w-1/4" >

            </div>
            <div className="w-2/4" >
                <h2 className="text-center font-bold text-2xl italic " >User Details{formFields.formNo}</h2>

                <form  className="px-30"  >
                    <label className="relative block">
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="firstName" 
                                type="text" name="firstName"
                                onChange={handleChange}
                                value={formFields.userInfo.firstName}
                                />
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="lastName" 
                                type="text" name="lastName"
                                onChange={handleChange}
                                value={formFields.userInfo.lastName}
                                />
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="dob" 
                                type="text" name="dob"
                                onChange={handleChange}
                                value={formFields.userInfo.dob}
                                />   
                        <input className=" m-2 placeholder:italic placeholder:text-slate-400 
                                        block bg-white w-full border border-slate-300 
                                        rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                                        focus:border-sky-500 focus:ring-sky-500 
                                        focus:ring-1 sm:text-sm" 
                                placeholder="address" 
                                type="text" name="address"
                                onChange={handleChange}
                                value={formFields.userInfo.address}
                                />             
                    </label>
                </form>

                <button  className=" text-gray-100 bg-gradient-to-r from-blue-600 to-blue-400 
                                     hover:from-blue-900 hover:to-blue-600 ...  px-3 py-1  rounded-md  
                                      hover:scale-105 duration-100 " 
                                      value={formFields.formNo} 
                                      onClick={nextPage}>Next</button>
            </div>

            <div className="w-1/4" >

            </div>
        </div>
    )
}