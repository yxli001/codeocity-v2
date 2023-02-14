import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
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
          <button className={styles.submitButton}>Send Message</button>
        </div>
      </form>
    </div>
  );
};
