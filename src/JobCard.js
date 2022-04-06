export default function JobCard( { title, description, company_name, salary  }){
    return(
        <div>
            
            <div class="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <h3 class=" text-xl font-bold " >{title}</h3>
                <h3 class=" font-bold " >{company_name}</h3>
                <p>{description}</p>
                <strong>{salary}</strong>
                        
            </div>

        </div>
    )
}