import Logo from '../assets/NavBar/LevelUpWorks-blue.png'
import NZFlag from "../assets/NavBar/NZFlag.png"
import MaoriFlag from "../assets/NavBar/MaoriFlag.png"
import styles from './NavBarWhite.module.css'

export default function NavBarWhite() {
  return (
      <div className={styles.mainContainer}>
          <img className={styles.logo} src={Logo} alt="levelup works logo" />
          <button className={styles.helpCentreBtn}>Help Centre</button>
      <button className={styles.moreProjectsBtn}>More Projects</button>
      <div className={styles.flagContainer}>
      <img className={styles.flag} src={NZFlag} alt="NZ flag" />
        <img className={styles.flag} src={MaoriFlag} alt="Maori Flag" />
      </div>
      </div>
  )
}