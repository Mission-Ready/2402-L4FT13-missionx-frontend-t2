import LinksFooter from "./LinksFooter"
import NavBar from '../../common/NavBar'
import styles from './TeacherProfile.module.css'
export default function TeacherProfile() {
  const teacherArray = [
    {
      firstName: "Jasmina",
      LastName: "Salvador",
      coursesPurchased: ["Beginner"],
      dateOfBirth: "25 June 1986",
      contact: "027 754 28 00",
      email: "jsalvador@homai.edu",
      photoSrc: "/images/teachers/JasminaSalvador.png",
    }
  ]

  const currentTeacher = teacherArray[0];
  return (
      <div>
          <NavBar />
      <div className={styles.mainContainer}>
        <div className={styles.content}></div>
        <div className={styles.leftSide}>
          <img className={styles.photo} src={currentTeacher.photoSrc} alt="teacher profile photo" />
          <div className={styles.buttonContainer}>
            <button className={styles.button}>EDIT PROFILE</button>
            <button className={styles.button}>CHANGE PHOTO</button>
            <button className={styles.button}>SETTINGS</button>
            
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
      
          <LinksFooter />
    </div>
  )
}