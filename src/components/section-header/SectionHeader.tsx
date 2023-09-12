import React from "react";
import { Color } from "../../config/theme";
import useStylesSectionHeader from "./style";

import { Typography } from "@material-ui/core";

export default function SectionHeader(props: {
  color: Color;
  id: string;
  content: JSX.Element;
}): JSX.Element {
  const classesSectionHeader = useStylesSectionHeader();

  return (
    <div id={props.id}>
      <Typography
        className={`${classesSectionHeader.sectionHeader} ${
          classesSectionHeader[props.color]
        }`}
      >
        {props.content}
      </Typography>
    </div>
  );
}
