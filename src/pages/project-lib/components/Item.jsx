import React from 'react'
import styles from './Gallery.module.css'
import PlaceHolder from '../../../assets/ProjectImage.png'

export default function Item(props) {
  return (
    <div className={styles.row}>
        <div className={styles.projectContainer}>
            <img src={PlaceHolder} className={styles.projectImage}/>
                <div className={styles.projectDetails}>
                    <h3 className={styles.projectTitle}>{props.projectTitle}</h3>
                    <h4 className={styles.projectSubtitle}>{props.projectSubtitle}</h4>
                </div>
        </div>
    </div>
  )
}
