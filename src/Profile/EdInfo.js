export default function EdInfo( { userInfo } ){
    // console.log(userInfo.educationInfo)
    let index=1;
    const edInfo = userInfo=== undefined ? 'Loading' : (userInfo.educationInfo.edInfo.map(edInfoRow=>{
        return(
            <tr key={index++} className="text-center border-b">
                <td className="p-1" >{edInfoRow.highestEducation}</td>
                <td className="p-1" >{edInfoRow.institutionName}</td>
                <td className="p-1" >{edInfoRow.grade}</td>
                <td className="p-1" >{edInfoRow.branch}</td>
            </tr>
        )
    }))
    return(
        <>
            <table className="table-auto w-11/12">
                <thead >
                    <tr className="bg-slate-100">
                    <th className="w-1/4 p-2" >Course</th>
                    <th className="w-1/4 p-2" >Institute</th>
                    <th className="w-1/4 p-2" >Grade</th>
                    <th className="w-1/4 p-2" >Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {edInfo}
                </tbody>
            </table>

        </>
    )
}