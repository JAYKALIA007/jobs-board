import './App.css';
import NavBar from './NavBar'
import FetchJobs from './FetchJobs'
import ApplyForm from './ApplyToAJob/ApplyForm'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FetchJobs />} />
        <Route path="apply/jobId=:jobId" element={<ApplyForm />} />
        {/* <Route path="apply/:jobId" render={(props) => <ApplyForm {...props} />}/>  */}
      </Routes>
    </div>
  );
}

export default App;
