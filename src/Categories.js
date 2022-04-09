import axios from 'axios';
import DisplayCategories from './DisplayCategories'
import {useState , useEffect }  from "react"
export default function Categories( { callback  }){
    const [categories,setCategories] = useState([])
    function callbackToFetchJobs(response){
        // console.log(response)
        callback(response)
    }
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
                // setCategories(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[categories])
    return(
        <div className='my-12 mx-2'>
            <strong className='text-gray-600 text-2xl italic ' >Filter via categories : </strong>
            <DisplayCategories categories={categories[0]}  callbackToCategoryComponent={callbackToFetchJobs} />
            {/* {console.log(categories[0])} */}
        </div>
    )
}