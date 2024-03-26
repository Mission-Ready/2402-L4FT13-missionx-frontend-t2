import React from 'react'
import NavBar from "../../common/NavBar"
import styles from './Projects.module.css'
import CategoryFilter from "./components/CategoryFilter"
import Gallery from "./components/Gallery"
import Footer from "../../common/Footer"

export default function Projects() {
  return (
    <>
    <NavBar/>
    <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.leftSide}/>
                    <div className={styles.rightSide}>
                        <h2>PROJECTS</h2> 
                        <p className={styles.subHead}>Welcome to the project library. You can use the filters on the right to help you search for specific projects</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.leftSide}>
                        <CategoryFilter/>
                    </div>
                    <div className={styles.rightSide}>
                        <Gallery />
                    </div>
                </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}
