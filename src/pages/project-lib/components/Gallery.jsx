import React from 'react'
import styles from './Gallery.module.css'
import Item from './Item'
import {Link} from 'react-router-dom'

export default function Gallery() {
    
    const sub = "BEGINNER | Animation"

    const addGalleryItems = (() => {
        
    })

    function backToTopClicked(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
  return (
    <div>
        <div className={styles.filterContainer}>
            <div>
                <button className={`${styles.levelSelector} ${styles.btnStart} ${styles.selected}`}>BEGINNER</button>
                <button className={styles.levelSelector}>INTERMEDIATE</button>
                <button className={`${styles.levelSelector} ${styles.btnEnd}`}>ADVANCED</button>
            </div>
            <div style={{display: "flex", alignItems: 'center'}}>
                <p style={{marginRight: "10px"}}>Show</p>
                <button className={`${styles.qtySelector} ${styles.btnStart} ${styles.selected}`}>5</button>
                <button className={styles.qtySelector}>10</button>
                <button className={`${styles.qtySelector} ${styles.btnEnd}`}>All</button>
            </div>
        </div>
        <div className={styles.row}>
            <Link to="./Introduction">
                <Item projectTitle="Introduction" projectSubtitle={sub}/>
            </Link>
            <Item projectTitle="My Birthday" projectSubtitle={sub}/>
            <Item projectTitle="10 Block Challenge" projectSubtitle={sub}/>
        </div>

        <div className={styles.row}>
            <Item projectTitle="Build a band" projectSubtitle={sub}/>
            <Item projectTitle="The bear and the monkey" projectSubtitle={sub}/>
            <Item projectTitle="Debugging" projectSubtitle={sub}/>
        </div>

        <div className={styles.row}>
            <Item projectTitle="About me" projectSubtitle={sub}/>
            <Item projectTitle="I am here!" projectSubtitle={sub}/>
            <Item projectTitle="Funny faces" projectSubtitle={sub}/>
        </div>

        <div className={styles.row}>
            <Item projectTitle="It tickles!" projectSubtitle={sub}/>
            <Item projectTitle="Penguin in a Desert" projectSubtitle={sub}/>
            <Item projectTitle="Time Travel" projectSubtitle={sub}/>
        </div>

        <div className={styles.row}>
            <Item projectTitle="Birthday Card" projectSubtitle={sub}/>
            <Item projectTitle="The Lion and the Mouse Part 1" projectSubtitle={sub}/>
            <Item projectTitle="The Lion and the Mouse Part 2" projectSubtitle={sub}/>
        </div>
        <div className={styles.buttonRow} >
            <button className={styles.backToTop} onClick={backToTopClicked}>BACK TO TOP</button>
        </div>
        
    
    </div>
  )
}
