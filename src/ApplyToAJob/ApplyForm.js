import {useState} from "react"
import UserDetailsForm from './UserDetailsForm'
import StudyDetailsForm from "./StudyDetailsForm"
import JobDetailsForm from "./JobDetailsForm"
import FinalConfirmationForm from './FinalConfirmationForm'
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from "@auth0/auth0-react";

export default function ApplyForm(){
    const { jobId } = useParams()
    const { user } = useAuth0();
    const [isSubmitted , setIsSubmitted] = useState(false)

    

    const [ formFields , setFormFields ] = useState (  { 
    
        formNo : 1,

        //user details form fields
        userInfo :{
            firstName : '',
            lastName : '',
            dob:'',
            address: '',
        },
        //study details form fields
        educationInfo : [{
            id: uuidv4(),
            highestEducation: '',
            institutionName: '',
            branch: '',
            grade: '',
        }],
        //job exp form fields
        jobExperienceInfo :[{
            id: uuidv4(),
            noOfYears: 0,
            designation:'',
            companyName: '',
        }]

     } )

    function nextPage(e){
        setFormFields( {...formFields , formNo : ++e.target.value} );
    }
    
    function prevPage(e){
        setFormFields( {...formFields , formNo : --e.target.value} );
        setIsSubmitted(false);   //toggle so that 
    }

    function handleChange(e){
        setFormFields({
            ...formFields,
            userInfo :{ ...formFields.userInfo,
            [e.target.name]: e.target.value
            }
        })
    }
    async function handleSubmit(e){
        e.preventDefault();

        try {
            const res = await axios.post('http://127.0.0.1:5000/apply',
            { jobId:jobId , 
                userDetails : { 
                    userInfo : formFields.userInfo , 
                    educationInfo : { edInfo : formFields.educationInfo} , 
                    jobExperienceInfo :{ jobExInfo :  formFields.jobExperienceInfo} 
                } , 
                uuid : user.sub.split('|')[1] })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
        setIsSubmitted(true)
        
        setTimeout(function() {
            window.location.replace('/');
          }, 2000);
    }
    function handleAddRowToForms(formName){
        if(formName === 'education details form'){
            setFormFields({
                ...formFields,
                educationInfo : [...formFields.educationInfo , {
                    id: uuidv4(),
                    highestEducation: '',
                    institutionName: '',
                    branch: '',
                    grade: ''
                }]
            })
        }
        else{
            setFormFields( {
                ...formFields,
                jobExperienceInfo : [...formFields.jobExperienceInfo,{
                    id: uuidv4(),
                    noOfYears: 0,
                    designation:'',
                    companyName: '',
                }]
            })
        }
    }

    function handleChangeEduForm(id,event){
        const updatedEdInfo = formFields.educationInfo.map(edInfo => {
            if(id === edInfo.id){
                edInfo[event.target.name] = event.target.value;
            }
            return edInfo;
        })
        setFormFields({...formFields,educationInfo: updatedEdInfo})
    }
    function handleChangeJobExpForm(id,event){
        const updatedJobExInfo = formFields.jobExperienceInfo.map(jobExInfo => {
            if(id === jobExInfo.id){
                jobExInfo[event.target.name] = event.target.value;
            }
            return jobExInfo;
        })
        setFormFields({...formFields,jobExperienceInfo: updatedJobExInfo})
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
    
    switch(formFields.formNo) {
        case 1: return (<UserDetailsForm  nextPage={nextPage} handleChange={handleChange} formFields={formFields} />)
        case 2 : return (<StudyDetailsForm nextPage={nextPage} prevPage={prevPage}  handleChange={handleChangeEduForm} formFields={formFields} handleAddRowToEducationForm={handleAddRowToForms}/>)
        case 3 : return (<JobDetailsForm nextPage={nextPage} prevPage={prevPage}  handleChange={handleChangeJobExpForm} formFields={formFields} handleAddRowToJobExpForm={handleAddRowToForms}/>)  
        default : return (
            <>
                <FinalConfirmationForm prevPage={prevPage} handleChange={handleChange} formFields={formFields} handleSubmit={handleSubmit} isSubmitted={isSubmitted}/>
                { isSubmitted &&  submittedText }
            </>
        )
        
    }        
}