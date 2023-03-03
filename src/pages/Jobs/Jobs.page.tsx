import React from "react";
import styles from "./Jobs.module.css";
import { MdEmail } from "react-icons/md";

export const Jobs = () => {
  return (
    <div className={styles.contactPageContainer} id="contact">
      <h1 className={styles.contactTitle}>Join the Codeocity Team!</h1>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInformationTitle}>
            Contact Information
          </h2>
          <p className={styles.formDescription}>
            Fill out the form and we'll get back to you within 24 hours
          </p>
          <p className={styles.formDescription}>
            We pay <b>$15/hour</b>, flexible scheduling. No teaching experience
            required!
          </p>
          <div className={styles.contactMethod}>
            <MdEmail className={styles.icon} />
            <a
              href="mailto:contact@codeocity.org"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              contact@codeocity.org
            </a>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            action="https://getform.io/f/6b9e6618-ba03-4109-a20b-10e0a4718bb2"
            method="POST"
          >
            <div className={styles.formSection}>
              <p className={styles.label}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.textInput}
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Email</p>
              <input
                type="text"
                name="email"
                className={styles.textInput}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Background/Skills/Any</p>
              <textarea
                className={`${styles.textInput} ${styles.textarea}`}
                placeholder="I have been coding for..."
                required
                name="background"
              ></textarea>
            </div>
            <div className={styles.formSection}>
              <button className={styles.submitButton} placeholder="Email">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
