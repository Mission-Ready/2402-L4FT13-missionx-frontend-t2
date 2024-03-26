import "./App.css";
import HelpRequests from "./pages/HelpRequest/HelpRequests";

import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import Home from "./pages/Home/Home"
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions"
import SubmitProject from "./pages/SubmitProject/SubmitProject"
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
import Projects from "./pages/project-lib/Projects"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Submit" element={<SubmitProject />} />
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpRequests/>}/>
        <Route path="/teacherprofile" element={<TeacherProfile/>}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
