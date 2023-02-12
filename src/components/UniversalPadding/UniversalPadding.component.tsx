import React from "react";
import style from "./UniversalPadding.module.css";

interface Props {
  children: React.ReactNode;
}

export const UniversalPadding = (props: Props) => {
  return <div className={style.universalPadding}>{props.children}</div>;
};
