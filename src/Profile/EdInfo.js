export default function EdInfo( { userInfo } ){
    // console.log(userInfo.educationInfo)
    let index=1;
    const edInfo = userInfo=== undefined ? 'Loading' : (userInfo.educationInfo.edInfo.map(edInfoRow=>{
        return(
            <div key={index++} >
                {index}.
                <p>{edInfoRow.highestEducation}</p>
                <p>{edInfoRow.institutionName}</p>
                <p>{edInfoRow.grade}</p>
                <p>{edInfoRow.branch}</p>
                <br/>
            </div>
        )
    }))
    return(
        <>
            {edInfo}
        </>
    )
}