import styles from './HelpRequestItem.module.css'

export default function HelpRequestItem({imageSrc, studentName, pronoun, date, time, index }) {
  return (
    <>
      <div className={styles.requestContainer}>
      <input className={styles.checkbox} type="checkbox" id={index} />
    
       <div className={styles.request}>
           <img className={styles.photo}src={imageSrc}/>
      <span className={styles.requestText} >{studentName} needs help with {pronoun} project.</span>
      <div className={styles.dateTimeContainer}>
           <div>{date}</div>
        <div className={styles.time}>{time}</div>
        </div>
        </div>
        </div>
      </>
  )
}
