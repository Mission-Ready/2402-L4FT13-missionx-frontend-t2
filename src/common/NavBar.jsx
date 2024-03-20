import React from 'react'
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'
import Logo from  "../assets/NavBar/LevelUpWorks-white.png"
import User from  "../assets/NavBar/Avatar-white.png"

export default function NavBar() {
  return (
    <div className={styles.mainBar}>
        <img className={styles.logo} src={Logo} alt="Logo image"/>
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
        <img className={styles.userImage} src={User} alt="User image"/>
      </div>
    </div>
  )
}
