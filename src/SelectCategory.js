import {useState  } from "react"
import axios from 'axios'
export default function SelectCategory( { categoryObj , callback } ) {
    const [isSelected , setIsSelected] = useState(categoryObj.selected)
    return(
        <div className = 
                {`cursor-pointer inline-block rounded-md m-1 ` + 
                (isSelected  ? "bg-slate-300 text-blue-600 font-bold" : "bg-slate-100 text-blue-500 font-medium") } >
                    
                <p className="px-2   " onClick={()=>{
                    categoryObj.selected = !categoryObj.selected
                    setIsSelected(categoryObj.selected)
                    callback(categoryObj)
                    
                    if(categoryObj.selected){
                        axios.get('http://127.0.0.1:5000/get_jobs_by_category',{ params : categoryObj})
                        .then(res=>{
                            console.log(res.data);
                        })
                        .catch(err=>{console.log(err)})
                    }

                }}  >

                    {categoryObj.category} 
                    {/* later replace this X with icon */}
                    {isSelected?`  x `:``}    
                </p>
        </div>
    )
}