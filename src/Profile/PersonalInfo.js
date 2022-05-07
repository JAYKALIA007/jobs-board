export default function PersonalInfo( { userInfo }){
    const personalInfo = userInfo === undefined ? 'Loading...' : userInfo.userInfo
    return(
        <>
            {personalInfo.address}
            {personalInfo.dob}
        </>
    )

}