import React from "react";

import type { IconType } from "react-icons/lib/esm/iconBase";

import styles from "./Box.module.css";

type Props = {
    Icon: IconType;
    title: string;
    description: string;
    background: string;
    className?: string;
};

const Box: React.FC<Props> = ({
    Icon,
    title,
    description,
    background,
    className,
}: Props) => {
    return (
        <div className={`${styles.box} ${className}`}>
            <Icon
                className={styles.icon}
                size={"2.8rem"}
                color="white"
                style={{ backgroundColor: `#${background}` }}
            />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Box;
