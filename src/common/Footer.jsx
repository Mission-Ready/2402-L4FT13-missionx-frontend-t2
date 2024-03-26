import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.main}>
        <div className={styles.listContainer}>
            <div className={styles.singleList}>
                <h3 className={styles.listTitle}>COMPANY</h3>
                <ul>
                    
                    <li>
                        About Us
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Partners
                    </li>

                </ul>
            </div>
            {/* ----------------------------------------------------- */}
            <div className={styles.singleList}>
                <h3 className={styles.listTitle}>COURSES</h3>
                <ul>
                    
                    <li>
                        Register
                    </li>
                    <li>
                        Login
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Teachers
                    </li>
                    <li>
                        Parents
                    </li>
                    <li>
                        Resources
                    </li>

                </ul>
            </div>
            {/* ----------------------------------------------------- */}
            <div className={styles.singleList}>
                <h3 className={styles.listTitle}>SUPPORT</h3>
                <ul>
                    
                    <li>
                        FAQs
                    </li>
                    <li>
                        Helpdesk
                    </li>
                    <li>
                        Contact Us
                    </li>

                </ul>
            </div>
            {/* ----------------------------------------------------- */}
            <div className={styles.singleList}>
                <h3 className={styles.listTitle}>LEGAL</h3>
                <ul>
                    
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Privacy Policy
                    </li>

                </ul>
            </div>
            {/* ----------------------------------------------------- */}
            <div className={styles.singleList}>
                <h4 className={styles.listTitle}>LevelUp Works </h4>
                <p className={styles.footerText}>
                LevelUp Works is an Auckland-based<br/>enterprise dedicated to developing game-based<br/>learning software to help teachers in response<br/>to the New Zealand Digital Technologies & <br/>Hangarau Matihiko.<br/><br/>Alan@levelupworks.com <br/>(021) 668 185
                </p>
            </div>

            

        </div>
        
    </div>
  )
}
