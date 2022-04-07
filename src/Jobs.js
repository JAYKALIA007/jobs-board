import JobCard from "./JobCard"
import SearchBar from './SearchBar'
export default function Jobs( { jobs } ){
    const displayJobs = jobs === [] ? 'Loading...' : jobs.map(job => {
        return(
            <div key={job.id} >
                <JobCard 
                    title={job.title}
                    description={job.description.replace(/<[^>]+>/g, '')}
                    company_name={job.company_name}  
                    salary={job.salary === '' ? 'Best in Industry' : job.salary}
                    tags = {job.tags}
                />
            </div>
        )
    } )
    return(
        <div className="flex" >
            <div className="w-3/4 ">
                
                {displayJobs}
            </div>
            <div className="w-1/4 m-8" >
                <SearchBar />
            </div>
        </div>

    )
}
