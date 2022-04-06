import JobCard from "./JobCard"
export default function Jobs( { jobs } ){
    const displayJobs = jobs === [] ? 'Loading...' : jobs.map(job => {
        return(
            <div key={job.id} >
                <JobCard  
                    title={job.title}
                    description={job.description.replace(/<[^>]+>/g, '')}
                    company_name={job.company_name}  
                    salary={job.salary === '' ? 'Best in Industry' : job.salary}
                />
            </div>
        )
    } )
    return(
        <div>
            {displayJobs}
        </div>

    )
}
