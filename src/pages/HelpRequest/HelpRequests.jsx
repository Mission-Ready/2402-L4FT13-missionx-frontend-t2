import React from "react";
import styles from "./HelpRequest.module.css";
import HelpRequestItem from "./HelpRequestItem";
import Aiden from "/images/students/AidenAndrews.png";
import Rawiri from "/images/students/RawiriFletcher.png";
import Neveah from "/images/students/NeveahMachenry.png";
import Javier from "/images/students/JavierFuego.png";
import Tokio from "/images/students/TokioHan.png";
// import ReplyIcon from '@mui/icons-material/Reply';
// import DoneIcon from '@mui/icons-material/Done';
import NavBarWhite from '../../common/NavBarWhite'
import Jasmina from "/images/teachers/JasminaSalvador.png";
import { useState, useEffect } from "react";
import Sidenav from "../../common/Sidenav";

export default function HelpRequests() {
  const requestArray = [{
      imageSrc: Aiden,
      studentName: "AIDEN",
      pronoun: "his",
      date: "TUE 28 April 2020",
      time: "10:43 AM",
      isCompleted: false
    },
    {
      imageSrc: Rawiri,
      studentName: "RAWIRI",
      pronoun: "his",
      date: "TUE 28 April 2020",
      time: "9:52 AM",
      isCompleted: false
    },
    {
      imageSrc: Neveah,
      studentName: "NEVEAH",
      pronoun: "her",
      date: "MON 27 April 2020",
      time: "4:59 PM",
      isCompleted: false
    },
    {
      imageSrc: Javier,
      studentName: "JAVIER",
      pronoun: "his",
      date: "MON 27 April 2020",
      time: "3:00 PM",
      isCompleted: false
    },
    {
      imageSrc: Tokio,
      studentName: "TOKIO",
      pronoun: "her",
      date: "MON 27 April 2020",
      time: "11:23 AM",
      isCompleted: false
    },
  ];

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
 function handleDoneClick () {
  //requestArray.filter
 }
  return (
    <div className={styles.main}>
      <Sidenav currentTeacher={teacherArray[0]} />    
      <NavBarWhite />
       
    <div>   
      
        <div className={styles.innerContainer}>
          
        <h2 className={styles.header2}>HELP REQUESTS</h2>
          <div className={styles.replyAndMarkDoneContainer}><span className={styles.replyContainer}>
            {/* <ReplyIcon className={styles.icon} />REPLY </span><span className={styles.markAsDoneContainer}>
              <DoneIcon onClick={handleDoneClick}className={styles.icon}/> */}
              MARK AS DONE</span></div>
        <div className={styles.scrollTrack}><div className={styles.scrollBar}></div></div>
        <div className={styles.requestContainer}>
        
        {requestArray.map((request, index) =>
          {
          return <HelpRequestItem key={index} isCompleted={request.isCompleted} imageSrc={request.imageSrc} studentName={request.studentName} pronoun={request.pronoun} date={request.date} time={request.time} />;
          }
          )}
          
          </div>
      </div>
           <footer className={styles.footer}>© LevelUp Works 2020 </footer>
      </div>
      
    </div>
  );
}
