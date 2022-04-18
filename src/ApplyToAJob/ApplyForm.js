import {useState} from "react"
import UserDetailsForm from './UserDetailsForm'
import StudyDetailsForm from "./StudyDetailsForm"
import JobDetailsForm from "./JobDetailsForm"
import FinalConfirmationForm from './FinalConfirmationForm'
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ApplyForm(){
    const { jobId } = useParams()
    let [formNo , setFormNo] = useState(1)
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [ formFields , setFormFields ] = useState (  { 
    
        // formNo : 1,

        //user details form fields
        firstName : '',
        lastName : '',
        dob:'',
        address: '',

        //study details form fields
        highestEducation: '',
        institutionName: '',
        branch: '',
        grade: '',

        //job exp form fields

        noOfYears: 0,
        designation:'',
        companyName: '',

     } )

    function nextPage(){
        setFormNo( formNo++ );
    }

    function prevPage(){
        setFormNo( formNo-- );
        setIsSubmitted(false);   //toggle so that 
    }

    function handleChange(e){
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log(formFields)

        try {
            const res = await axios.post('http://127.0.0.1:5000/apply',{ jobId:jobId , userDetails : formFields })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
        setIsSubmitted(true)
        
        setTimeout(function() {
            window.location.replace('/');
          }, 2000);
    }

    const submittedText = <div className="flex text-center text-gray-600 ">
            <div className="w-1/4" >

            </div>
            <div className="w-2/4" >
                <h2 className="text-xl font-bold" >Submitted successfully</h2>
                <p>If page doesn't redirect, <Link to="/" className="underline ">click here</Link></p>
            </div>
            <div className="w-1/4" >

            </div>
        </div>
    
    switch(formNo) {
        case 1: return (<UserDetailsForm formNo={formNo}  nextPage={nextPage} handleChange={handleChange} formFields={formFields} />)
        case 2 : return (<StudyDetailsForm formNo={formNo} nextPage={nextPage} prevPage={prevPage}  handleChange={handleChange} formFields={formFields} />)
        case 3 : return (<JobDetailsForm formNo={formNo} nextPage={nextPage} prevPage={prevPage}  handleChange={handleChange} formFields={formFields} />)  
        default : return (
            <>
                <FinalConfirmationForm formNo={formNo} prevPage={prevPage} handleChange={handleChange} formFields={formFields} handleSubmit={handleSubmit} isSubmitted={isSubmitted}/>
                { isSubmitted &&  submittedText }
            </>
        )
        
    }        
}