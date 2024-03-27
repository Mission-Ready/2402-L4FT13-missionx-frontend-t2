import { useState } from 'react'
import styles from './HomeDashboard.module.css'
import DigitalTechnologies from './components/DigitalTechnologies.jsx'
import IR40 from './components/IR40.jsx'
import KeyCompetencies from './components/KeyCompetencies.jsx'
import LearningPathways from './components/LearningPathways.jsx'

export default function HomeDashboard() {

    const [displayedContent, setDisplayedContent] = useState({ name: "key-competencies", component: <KeyCompetencies /> })

    function handleContentClick(e) {
        console.log(e.target.id)

        switch (e.target.id) {
            case "learning-pathways":
                setDisplayedContent({ name: "learning-pathways", component: <LearningPathways /> });
                break;
            case "digital-technologies":
                setDisplayedContent({ name: "digital-technologies", component: <DigitalTechnologies /> });
                break;
            case "key-competencies":
                setDisplayedContent({ name: "key-competencies", component: <KeyCompetencies /> });
                break;
            case "ir-4.0":
                setDisplayedContent({ name: "ir-4.0", component: <IR40 /> });
                break;
            default:
                setDisplayedContent({ name: "key-competencies", component: <KeyCompetencies /> });
        }
    }

    return (
        <div>
            <h2>How our programme helps teachers and schools</h2>

            <button id="learning-pathways" onClick={handleContentClick}
                className={`${styles.btn} ${displayedContent.name === "learning-pathways" ? styles.active : ""}`}>Learning Pathways</button>

            <button id="digital-technologies" onClick={handleContentClick}
                className={`${styles.btn} ${displayedContent.name === "digital-technologies" ? styles.active : ""}`}>Digital Technologies</button>

            <button id="key-competencies" onClick={handleContentClick}
                className={`${styles.btn} ${displayedContent.name === "key-competencies" ? styles.active : ""}`}>Key Competencies</button>
            
            <button id="ir-4.0" onClick={handleContentClick}
                className={`${styles.btn} ${displayedContent.name === "ir-4.0" ? styles.active : ""}`}>IR4.0</button>
            
            <div>{displayedContent.component}</div>
        </div>
    )
}