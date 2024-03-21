import React from 'react'
import styles from './HelpRequest.module.css'
import HelpRequestItem from './HelpRequestItem'

export default function HelpRequests() {
  return (
      <div>
          <div className={styles.innerContainer}><h2 style={{ size: "24px" }}>HELP REQUESTS</h2>
              <div className={styles.requestContainer}><input className={styles.checkbox} type="checkbox" name="" id="" />
          <div className={styles.request}>
          <span className={styles.requestText}>Placeholder</span>
              </div>
                  
        </div>
        <div className={styles.requestContainer}><input className={styles.checkbox} type="checkbox" name="" id="" />
              <div className={styles.request}>Placeholder</div>
                  
        </div>
        <div className={styles.requestContainer}><input className={styles.checkbox} type="checkbox" name="" id="" />
              <div className={styles.request}>Placeholder</div>
                  
        </div>
        <div className={styles.requestContainer}><input className={styles.checkbox} type="checkbox" name="" id="" />
              <div className={styles.request}>Placeholder</div>
                  
        </div>
        
        <div className={styles.requestContainer}><input className={styles.checkbox} type="checkbox" name="" id="" />
              <div className={styles.request}>Placeholder</div>
                  
        </div>
        
          
          </div>
          
    </div>
  )
}
