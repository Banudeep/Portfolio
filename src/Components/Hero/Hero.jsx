import React from "react";
import styles from "./HeroStyles.module.css";
import linkedin_icon from "../../assets/linkedin_icon.png";
import github_icon from "../../assets/github_icon.png";
import profile_pic from "../../assets/banudeep_picture.jpeg";

function Hero() {
  return (
    <section id="Hero">
      <div className={styles.container}>
        <img
          src={profile_pic}
          alt="profile picture"
          className={styles.profile_picture}
        />
        <div className={styles.info}>
          <h1>
            Banudeep Reddy <br></br>Gade
          </h1>
          <h2>Software Engineer</h2>
          <p>
            Passionate about building scalable, data-driven solutions using
            full-stack development, cloud technologies, and AI integration.
          </p>
          <span className={styles.email}>
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="Gmail"
              className={styles.gmailIcon}
            />
            <span className={styles.emailText}>banudeepreddy@gmail.com</span>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/banudeep-reddy-gade-118013212/"
              target="_blank"
            >
              <img src={linkedin_icon} />
            </a>
            <a href="https://github.com/Banudeep" target="_blank">
              <img src={github_icon} />
            </a>
          </span>
          {/* <div className={styles.resume}> */}
          <button
            onClick={() => window.open("Banudeep_Reddy_Resume.pdf", "_blank")}
            className={styles.resume}
          >
            Resume
          </button>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
// C:\Users\banud\OneDrive\Documents\GitHub\Portfolio\src\assets\Banudeep_Reddy_Resume.pdf
export default Hero;
