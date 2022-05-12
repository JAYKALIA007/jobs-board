import axios from 'axios';
import DisplayCategories from './DisplayCategories'
import {useState , useEffect }  from "react"
export default function Categories( { callbackFilterTerm }){
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        if(categories.length === 0){
            axios.get('http://127.0.0.1:5000/get_categories')
            .then(res=>{
                let tempCategoryArr = []
                for(let i=0; i<res.data.length; i++){
                    let tempCategoryObj = {}
                    tempCategoryObj.category = res.data[i]
                    tempCategoryObj.selected = false
                    tempCategoryArr.push(tempCategoryObj)
                }
                setCategories([...categories, tempCategoryArr])
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[categories])
    return(
        <div className='my-8 mx-2 mobile_s:w-9/12 mobile_s:mx-auto sm:w-full '>
            <strong className='text-gray-600 text-2xl italic ' >Filter via categories : </strong>
            <DisplayCategories categories={categories[0]} callbackFilterTerm={callbackFilterTerm}/>
        </div>
    )
}