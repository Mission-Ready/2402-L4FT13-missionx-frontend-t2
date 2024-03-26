import React from 'react'
import styles from './Gallery.module.css'
import Item from './Item'

export default function Gallery() {
    
    const sub = "BEGINNER | Animation"

    const addGalleryItems = (() => {
        
    })
    
  return (
    <div>
        <div className={styles.row}>
            <Item projectTitle="Introduction" projectSubtitle={sub}/>
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
            <button className={styles.backToTop}>BACK TO TOP</button>
        </div>
        
    
    </div>
  )
}
