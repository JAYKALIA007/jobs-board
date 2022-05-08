import './App.css';
import NavBar from './NavBar'
import FetchJobs from './Jobs/FetchJobs'
import Profile from './Profile/Profile'
import ApplyForm from './ApplyToAJob/ApplyForm'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FetchJobs />}  />
        <Route path="/profile/u=:uId" element={<Profile />}  />
        <Route path="apply/jobId=:jobId" element={<ApplyForm />} />
      </Routes>
    </div>
  );
}

export default App;
