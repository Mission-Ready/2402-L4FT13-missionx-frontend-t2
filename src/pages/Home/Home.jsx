import React from 'react'
import NavBar from "../../common/NavBar"
import Footer from '../../common/Footer'
import styles from "./Home.module.css"
import HomeDashboard from '../HomeDashboard/HomeDashboard'

export default function Home() {
  return (
    <>
      <NavBar />
      
      <div class={styles.container}>
        <div className='prepare'>

        <h1>Prepare young minds</h1>
        <h1>for a better <span>future.</span></h1 >
        <h3>Let us help you advance students in Digital</h3>
        <h3>Technologies and other learning areas with</h3>
        <h3>Our project-based learning programme..</h3>
          
        <button className={styles.learnMoreButton}>LEARN MORE</button>
        <button className={styles.signUpButton}>SIGN UP</button>
        </div>

      </div>

      <HomeDashboard/>
      <Footer />
    </>
  )
}