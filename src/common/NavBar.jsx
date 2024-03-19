import React from 'react'
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.mainBar}>
        <div className={styles.logo}>
        </div>
      <nav>
        <Link to="/">
        <button className={styles.btn}>Home</button>
        </Link>
        <Link to="/features">
        <button className={styles.btn}>Features</button>
        </Link>
        <Link to="/teachers">
        <button className={styles.btn}>Teachers</button>
        </Link>
      </nav>
      <div>
      <div className={styles.userImage}></div>
      </div>
    </div>
  )
}
