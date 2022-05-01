import {useState  } from "react"
export default function SelectCategory( { categoryObj , callbackToUnselectOthers , callbackFilterTerm} ) {
    const [isSelected , setIsSelected] = useState(categoryObj.selected)
    return(
        <div className = 
                {`cursor-pointer inline-block rounded-md m-1 ` + 
                (isSelected  ? "bg-slate-300 text-blue-600 font-bold" : "bg-slate-100 text-blue-500 font-medium") } >
                    
                <p className="px-2   " onClick={()=>{
                    categoryObj.selected = !categoryObj.selected
                    setIsSelected(categoryObj.selected)
                    callbackToUnselectOthers(categoryObj)
                    if(categoryObj.selected){
                        callbackFilterTerm(categoryObj.category)
                    }
                    else{
                        callbackFilterTerm('')
                    }

                }}  >

                    {categoryObj.category} 
                    {/* later replace this X with icon */}
                    {isSelected?`  x `:``}    
                </p>
        </div>
    )
}