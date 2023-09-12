import React from "react";

import useStylesFooter from "./style";

import { Typography } from "@material-ui/core";

import footerData from "./footerData";

export default function Footer(): JSX.Element {
  const classesFooter = useStylesFooter();

  return (
    <>
      <div className={classesFooter.footer}>
        <Typography className={classesFooter.footerText}>
          Created by Anthony N. Hein. Last updated {footerData.lastUpdated}
        </Typography>
      </div>
    </>
  );
}
