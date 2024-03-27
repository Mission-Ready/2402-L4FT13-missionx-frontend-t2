import React, { useState } from "react";
import NavBarWhite from "../../common/NavBarWhite";
import ProjectImage from "../../assets/StudentDashboard/makeProject-screenshot.png";
import HelpIcon from '../../assets/StudentDashboard/sendPhoto.png';
import TeacherHelp from "../../assets/StudentDashboard/submitProject-Photo.png";
import TeacherIcon from '../../assets/StudentDashboard/callTeacher.png';
import "./SubmitProject.css";

function SubmitProject() {
  const [photoButtonDisabled, setPhotoButtonDisabled] = useState(false);

  const submitProject = () => {
    alert('Nice one. Project submitted successfully!');
    setPhotoButtonDisabled(true); 
  };

  const askForHelp = () => {
    alert('Nice one. Help request submitted successfully!');
  };

  return (
    <div>
      <NavBarWhite />
      <div className="container">
        <div className="left-panel">  
          <img src={ProjectImage} alt="ProjectImage" />
          <h2>Submit project photo</h2>
          <p>After completing your project, take a screenshot of your project and upload it here.</p>
          <button onClick={submitProject} disabled={photoButtonDisabled}>Send Photo
            <img src={HelpIcon} alt="Ask for Help" />
          </button>
        </div>
        <div className="right-panel">
          <img src={TeacherHelp} alt="TeacherHelp" /> 
          <h2>Call for teacher</h2>
          <p>If your teacher is in the same room as you, click on the button below to let them know you are done.</p>
          <button onClick={askForHelp}>Call Teacher
            <img src={TeacherIcon} alt="Call Teacher" />
          </button>
        </div>
      </div>
      <footer>© LevelUp Works 2020 </footer>
    </div>
  );
}

export default SubmitProject;