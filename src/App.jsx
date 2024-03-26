import "./App.css";

import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import Home from "./pages/Home/Home"
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions"
import SubmitProject from "./pages/SubmitProject/SubmitProject"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SubmitProject />} />
      </Routes>
    </>
  )
}
