import styles from "./LinksFooter.module.css";

export default function LinksFooter() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.section}>
        <ul>
          <h3>COMPANY</h3>

          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
        </ul>
      </div>

      <div className={styles.section}>
        <ul>
          <h3>COURSES</h3>

          <li>Register</li>
          <li>Login</li>
          <li>Projects</li>
          <li>Teachers</li>
          <li>Parents</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className={styles.section}>
        <ul>
          <h3>SUPPORT</h3>

          <li>FAQs</li>
          <li>Helpdesk</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.section}>
        <ul>
          <h3>LEGAL</h3>

          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.section}>        
        <p><h3 style={{margin: "0px"}}>LevelUp Works</h3>LevelUp Works is an Auckland-based <br />
          enterprise dedicated to developing game- <br />
          based learning software to help teachers in
          <br />response to the New Zealand Digital
          <br />Technologies & Hangarau Matihiko. </p>
          <p> alan@levelupworks.com </p>
          <p> (021) 668 185</p>
      </div>
    </div>
  );
}
