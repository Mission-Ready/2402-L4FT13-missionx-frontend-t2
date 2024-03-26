import React from 'react'
import NavBar from "../../common/NavBar"
import SideBar from "../../common/SideBar"
import Footer from '../../common/Footer'
import styles from "./Home.module.css"


export default function Home() {
  return (
    <>
        <NavBar/>
        <SideBar/>
        <br/>
        <div>Home</div>
        <Footer/>
    </>
    
  )
}
