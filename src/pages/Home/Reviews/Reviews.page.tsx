import React from "react";
import style from "./Reviews.module.css";
export const Reviews = () => {
  return (
    <div className={style.reviewContainer}>
      <h1 className={style.reviewTitle}>What Our Students Say...</h1>
      <p className={style.review}>
        "Brian was really great and my son learned a lot! He's done other coding
        classes, but he said yours was better as he got to apply the things he
        learned to one project as opposed to learning new things and projects
        every week which were really overwhelming. Looking forward to your fall
        class! "
      </p>
      <p className={style.review}>
        “Meron was so patient, knowledgeable and very flexible with her time!
        She wanted to make sure that Luke got the most of the class, so she was
        able to check in with him and make sure he made up for missed sessions.
        She's great!”
      </p>
      <p className={style.parent}>- Codeocity Parents</p>
    </div>
  );
};
