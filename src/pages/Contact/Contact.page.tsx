import React from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className={styles.contactPageContainer} id="contact">
      <h1 className={styles.contactTitle}>Get In Touch</h1>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInformationTitle}>
            Contact Information
          </h2>
          <p className={styles.formDescription}>
            Fill out the form and our team will get back to you within 24 hours
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
              <p className={styles.label}>Message</p>
              <textarea
                className={`${styles.textInput} ${styles.textarea}`}
                placeholder="Message..."
                required
                name="message"
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
