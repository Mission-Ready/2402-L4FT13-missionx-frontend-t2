import "./App.css";
import HelpRequests from "./pages/HelpRequest/HelpRequests";

import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import Home from "./pages/Home/Home"
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpRequests/>}/>
        <Route path="/teacherprofile" element={<TeacherProfile/>}/>
      </Routes>
    </>
  )
}
