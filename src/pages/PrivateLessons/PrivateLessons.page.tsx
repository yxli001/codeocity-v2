import React from "react";
import styles from "./PrivateLessons.module.css";
import { MdEmail } from "react-icons/md";

const PrivateLessons = () => {
  return (
    <div className={styles.contactPageContainer} id="contact">
      <h1 className={styles.contactTitle}>Private Lessons</h1>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInformationTitle}>
            Want 1 on 1 instruction in any language?
          </h2>
          <p className={styles.formDescription}>
            We offer lessons for only <b>$40/hour</b> on your schedule.
          </p>
          <div className={styles.contactMethod}>
            <MdEmail className={styles.icon} />
            <a
              href="mailto:contact@codeocity.org"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              contact@codeupnp.org
            </a>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            action="https://getform.io/f/472da4d4-f857-42c5-b1bd-eeb959d7ed81"
            method="POST"
          >
            <div className={styles.formSection}>
              <p className={styles.label}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.textInput}
                placeholder="Full Name"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Email</p>
              <input
                type="text"
                name="email"
                className={styles.textInput}
                placeholder="Ex. example@gmail.com"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Preferred Day[s]/Time[s]</p>
              <input
                type="text"
                name="time"
                className={styles.textInput}
                placeholder="Ex. Monday, Wednesday, 6-7pm"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Language/Topic</p>
              <input
                type="text"
                name="language/topic"
                className={styles.textInput}
                placeholder="Ex. HTML, CSS, Python, etc."
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Anything else?</p>
              <textarea
                className={`${styles.textInput} ${styles.textarea}`}
                placeholder="Message..."
                required
                name="message"
              ></textarea>
            </div>
            <div className={styles.formSection}>
              <button className={styles.submitButton}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrivateLessons;
