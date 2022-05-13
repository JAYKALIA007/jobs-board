export default function JobExInfo({ userInfo }){
    let index=1;
    const jobExInfo = userInfo=== undefined ? 'Loading' : (userInfo.jobExperienceInfo.jobExInfo.map(jobExInfoRow=>{
        return(
            <tr key={index++} className="text-center border-b">
                <td className="p-1" >{jobExInfoRow.companyName}</td>
                <td className="p-1" >{jobExInfoRow.designation}</td>
                <td className="p-1" >{jobExInfoRow.noOfYears}</td>
            </tr>
        )
    }))
    return(
        <>
            <table className="table-auto w-11/12">
                <thead >
                    <tr className="bg-slate-100">
                    <th className="w-1/4 p-2" >Company Name</th>
                    <th className="w-1/4 p-2" >Designation</th>
                    <th className="w-1/4 p-2" >No of years</th>
                    </tr>
                </thead>
                <tbody>
                    {jobExInfo}
                </tbody>
            </table>
        </>
    )

}