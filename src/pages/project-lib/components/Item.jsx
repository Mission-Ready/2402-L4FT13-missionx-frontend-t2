import React from 'react'
import styles from './Gallery.module.css'

export default function Item(props) {
  return (
    <div className={styles.row}>
        <div className={styles.projectContainer}>
            <img src={props.projectImage} className={styles.projectImage}/>
                <div className={styles.projectDetails}>
                    <h3 className={styles.projectTitle}>{props.projectTitle}</h3>
                    <h4 className={styles.projectSubtitle}>{props.projectSubtitle}</h4>
                </div>
        </div>
    </div>
  )
}
