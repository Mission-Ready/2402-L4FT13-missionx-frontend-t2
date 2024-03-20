import React from 'react'
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'
import Logo from  "../assets/NavBar/LevelUpWorks-white.png"
import User from  "../assets/NavBar/Avatar-white.png"
import NZFlag from "../assets/NavBar/NZFlag.png"
import MaoriFlag from "../assets/NavBar/MaoriFlag.png"

export default function NavBar() {
  return (
    <div className={styles.mainBar}>
        <img className={styles.logo} src={Logo} alt="Logo image"/>
      <nav className={styles.nav}>
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
      <div className={styles.rightSide}>
        <div className={styles.flagContainer}>
          <p style={{marginRight: "5px"}}>LANG</p> 
          <img className={styles.flag} src={NZFlag} alt="NZ Flag"/>
          <img className={styles.flag} src={MaoriFlag} alt="Maori Flag"/>
        </div>
        <div className={styles.userProfile}>
          <img className={styles.userImage} src={User} alt="User image"/>
          <div>
          <button className={styles.loginButtons}>REGISTER</button>
          <span className={styles.divid}>|</span>
          <button className={styles.loginButtons}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}
