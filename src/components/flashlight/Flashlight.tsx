import React from "react";
import { Color } from "../../config/theme";
import useStyles from "../../config/style";
import useStylesFlashlight from "./style";

export default function Flashlight(props: {
  color: Color;
  content: string;
}): JSX.Element {
  const classes = useStyles();
  const classesFlashlight = useStylesFlashlight();

  return (
    <div className={`${classesFlashlight.flashlight} ${classes[props.color]}`}>
      {props.content}
    </div>
  );
}
