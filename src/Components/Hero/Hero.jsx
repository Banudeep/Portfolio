import styles from "./HeroStyles.module.css";
import linkedin_icon from "../../assets/linkedin_icon.png";
import github_icon from "../../assets/github_icon.png";
import profile_pic from "../../assets/banudeep_picture.jpeg";

function Hero() {
  return (
    <>
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
          <p>One liner summary</p>
        </div>
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
        <div className={styles.resume}>
          <button>Resume</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
