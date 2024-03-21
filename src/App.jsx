import "./App.css";
import HelpRequests from "./pages/HelpRequests";

import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import Home from "./pages/Home/Home"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
