export default function JobExInfo({ userInfo }){
    let index=1;
    const jobExInfo = userInfo=== undefined ? 'Loading' : (userInfo.jobExperienceInfo.jobExInfo.map(jobExInfoRow=>{
        return(
            <div key={index++} >
                {index}.
                <p>{jobExInfoRow.companyName}</p>
                <p>{jobExInfoRow.designation}</p>
                <p>{jobExInfoRow.noOfYears}</p>
                <br/>
            </div>
        )
    }))
    return(
        <>
            {jobExInfo}
        </>
    )

}