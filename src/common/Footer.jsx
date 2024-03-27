import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.layout}>
            <div className="company">
                <h3>COMPANY</h3>
                <p><b>About us</b></p>
                <p><b>Careers</b></p>
                <p><b>Partners</b></p>
            </div>
            <div className="courses">
                <h3>COURSES</h3>
                <p><b>Register</b></p>
                <p><b>Login</b></p>
                <p><b>Projects</b></p>
                <p><b>Teachers</b></p>
                <p><b>Resources</b></p>
            </div>
            <div className="support">
                <h3>SUPPORT</h3>
                <p><b>FAQs</b></p>
                <p><b>Helpdesk</b></p>
                <p><b>Contact Us</b></p>
            </div>
            <div className="legal">
                <h3>LEGAL</h3>
                <p><b>Terms & Conditions</b></p>
                <p><b>Privacy Policy</b></p>
            </div>
            <div className="levelup">
                <h3>LevelUp Works</h3>
                <p><b>LevelUp works is an Auckland-based</b></p>
                <p><b>enterprise dedicated to developing game-</b></p>
                <p><b>based learning software to help teachers in</b></p>
                <p><b>response to the New Zealand Digital</b></p>
                <p><b>Technologies & Hangarau Matihiko.</b></p>
                <p><b>alan@levelupworks.com</b></p>
                <p><b>(021) 668 185</b></p>
            </div>
        </div>
    );
}