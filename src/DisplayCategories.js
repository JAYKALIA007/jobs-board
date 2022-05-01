import SelectCategory from "./SelectCategory"
import { useState,useEffect } from 'react'
export default function DisplayCategories( { categories , callbackFilterTerm }){
    const [reload,setReload] = useState(false)
    useEffect(() => {},[reload])

    // function to unselect all other categories when one is selected
    function callbackToUnselectOthers(categoryObj){
        for(let tempCategory of categories){
            if(tempCategory.category !== categoryObj.category && categoryObj.selected){
                tempCategory.selected = false;
            }
        }
        setReload(!reload)
    }

    const displayCategories = categories === undefined ? (
    <div className="text-slate-400  italic">
        Loading categories. Hang on...
    </div>
    ) :
    categories.map(category => {
            return(
                <SelectCategory categoryObj={category} key={Math.random()} callbackToUnselectOthers={callbackToUnselectOthers} callbackFilterTerm={callbackFilterTerm} />
                )
        })

    return(
        <div className="mt-5">
            {displayCategories}
        </div>
    )
}