import SelectCategory from "./SelectCategory"
import { useState,useEffect } from 'react'
export default function DisplayCategories( { categories, callbackToCategoryComponent }){
    const [reload,setReload] = useState(false)
    useEffect(() => {},[reload])
    function callback(categoryObj){
        // console.log(categoryObj)
        for(let tempCategory of categories){
            if(tempCategory.category !== categoryObj.category && categoryObj.selected){
                tempCategory.selected = false;
            }
        }
        setReload(!reload)
    }
    function callback2(response){
        // console.log(response)
        callbackToCategoryComponent(response)
    }
    const displayCategories = categories === undefined ? (
    <div className="text-slate-400  italic">
        Loading categories. Hang on...
    </div>
    ) :
    categories.map(category => {
            return(
                <SelectCategory categoryObj={category} key={Math.random()} callback={callback} callback2={callback2} />
                )
        })

    return(
        <div className="mt-5">
            {displayCategories}
        </div>
    )
}