import JobCard from "./JobCard"
export default function Jobs( { jobs } ){
    // jobs array sliced so as to show only 10 jobs at a time
    // later try to implement next page feature
    const slicedJobsArray = jobs === [] ? [] :jobs.slice(0, 10);

    const displayJobs = slicedJobsArray.map(job => {
        return(
            <div key={job.id} >
                <JobCard 
                    title={job.title}
                    description={job.description.replace(/<[^>]+>/g, '')}
                    company_name={job.company_name}  
                    salary={job.salary === '' ? 'Best in Industry' : job.salary}
                    tags = {job.tags}
                    id={job.id}
                    category={job.category}
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
