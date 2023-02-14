import React from "react";
import { FaBrain, FaWrench, FaRegSmileBeam } from "react-icons/fa";
import Box from "../../../components/Box/Box.component";

import styles from "./Why.module.css";

const Why = () => {
    return (
        <>
            <h1 className={styles.title}>Why Learn to Code?</h1>
            <div className={styles.boxes}>
                <Box
                    Icon={FaBrain}
                    title="Thinking"
                    description="Coding is a very logic based activity. By learning to code, you sharpen your analytical reasoning and logic skills."
                    background="9747FF"
                    className={styles.box}
                />

                <Box
                    Icon={FaWrench}
                    title="Problem Solving"
                    description="Coding is a very logic based activity. By learning to code, you sharpen your analytical reasoning and logic skills."
                    background="ABCD51"
                    className={styles.box}
                />

                <Box
                    Icon={FaRegSmileBeam}
                    title="It's fun!"
                    description="Coding is a very logic based activity. By learning to code, you sharpen your analytical reasoning and logic skills."
                    background="FF5FA7"
                    className={styles.box}
                />
            </div>
        </>
    );
};

export default Why;
