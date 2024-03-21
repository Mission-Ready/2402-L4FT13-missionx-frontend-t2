import React from 'react'
import styles from './HelpRequestItem.module.css'

export default function HelpRequestItem() {
  return (
       <div className={styles.container}>
           <span className='studentPhoto'>{studentPhoto}</span>
           <span className='studentName'>{studentName}</span>
           <span>needs help with {hisOrHer} project.</span>
           <span>{requestDate}</span>
           <span>{requestTime}</span>
    </div>
  )
}
