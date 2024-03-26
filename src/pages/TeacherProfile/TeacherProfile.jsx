import LinksFooter from "./LinksFooter"
import NavBar from '../../common/NavBar'
import styles from './TeacherProfile.module.css'
export default function TeacherProfile() {
  return (
      <div>
          <NavBar />
          <div className={styles.mainContainer}></div>
          <LinksFooter />
    </div>
  )
}