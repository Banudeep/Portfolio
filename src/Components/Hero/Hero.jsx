import React, { useEffect } from "react";
import styles from "./HeroStyles.module.css";
import linkedin_icon from "../../assets/linkedin_icon.png";
import github_icon from "../../assets/github_icon.png";
import profile_pic from "../../assets/banudeep_picture.jpeg";
import aws_ccp from "../../assets/aws-certified-cloud-practitioner.png";
import gcp_ace from "../../assets/associate-cloud-engineer-certification.png";
import aws_dva from "../../assets/aws-certified-developer-associate.png";
import aws_aif from "../../assets/AWS_AI_founational.png";

function Hero() {
  useEffect(() => {
    // Load Credly badge script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
          <button
            onClick={() => window.open("Banudeep_Reddy_Resume.pdf", "_blank")}
            className={styles.resume}
          >
            Resume
          </button>
          <br />
          <br />
          <br />{" "}
          <span>
            <a
              href="https://www.credly.com/badges/cffbe700-be16-43d2-8064-feaeafb229a0/public_url"
              target="_blank"
            >
              <img className={styles.certBadge} src={aws_ccp} />
            </a>
            <a
              href="https://www.credly.com/badges/91cd3ea1-9d8d-400d-aa8f-5d76c9688644"
              target="_blank"
            >
              <img className={styles.certBadge} src={aws_dva} />
            </a>
            <a
              href="https://www.credly.com/badges/09dbe47c-11e9-44d3-b5e1-d69abfdf7bf9"
              target="_blank"
            >
              <img className={styles.certBadge} src={aws_aif} />
            </a>
            <a
              href="https://www.credly.com/badges/55cb038c-32db-43f5-a672-440b0b4da63b/public_url"
              target="_blank"
            >
              <img className={styles.certBadge} src={gcp_ace} />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
// C:\Users\banud\OneDrive\Documents\GitHub\Portfolio\src\assets\Banudeep_Reddy_Resume.pdf
export default Hero;
