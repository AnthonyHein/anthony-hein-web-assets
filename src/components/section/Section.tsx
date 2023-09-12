import React from "react";
import { Color } from "../../config/theme";
import useStylesSection from "./style";

export default function Section(props: {
  color: Color;
  content: JSX.Element;
  skinny: Boolean;
}): JSX.Element {
  const classesSection = useStylesSection();

  return (
    <div
      className={`${classesSection.section} ${classesSection[props.color]} ${
        props.skinny ? classesSection.skinny : null
      }`}
    >
      <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
        {props.content}
      </div>
    </div>
  );
}
