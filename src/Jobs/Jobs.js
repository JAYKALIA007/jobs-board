import JobCard from "./JobCard"
export default function Jobs( { jobs } ){

    const displayJobs = jobs===[] ? (
    <div className="text-slate-400  italic">
        Loading categories. Hang on...
    </div>
    ) : jobs.map(job => {
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
