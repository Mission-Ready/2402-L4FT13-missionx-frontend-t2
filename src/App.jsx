import "./App.css";

import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import Projects from "./pages/project-lib/Projects"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
