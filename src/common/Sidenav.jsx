import styles from "./Sidenav.module.css";
//import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import ProgressTracker from "../assets/TeacherDashboard/progressTracker.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidenav({ currentTeacher }) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.profilePhoto}
          src={currentTeacher.photoSrc}
          alt="Profile photo of Jasmina Salvador"
        />
      </div>
      <nav className={styles.linksContainer}>
        <NavLink>PROGRESS TRACKER</NavLink>
        <NavLink>STUDENT PROFILES</NavLink>
        <NavLink to="/help">
          HELP REQUESTS
        </NavLink>
        <NavLink>PROJECT SUBMISSIONS</NavLink>
        <NavLink>PROJECT LIBRARY</NavLink>
      </nav>
    </div>
  );
}
