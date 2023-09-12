import React from "react";
import { Color } from "../../config/theme";
import useStyles from "../../config/style";
import useStylesContact from "./style";

import { Tooltip, Typography } from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";

import Section from "../../components/section/Section";
import SectionHeader from "../../components/section-header/SectionHeader";

export default function Contact(): JSX.Element {
  const classes = useStyles();
  const classesContact = useStylesContact();

  return (
    <>
      <Section
        color={Color.primary}
        content={
          <>
            <SectionHeader
              color={Color.gray}
              id="contact"
              content={
                <>
                  Contact
                  <EmailIcon
                    className={`${classes.gray} ${classes.sectionHeaderIcon}`}
                  />
                </>
              }
            />
            <div>
              <Typography className={`${classes.body} ${classes.gray}`}>
                Find me at any of the following (in order of descending use):
              </Typography>
            </div>
            <div>
              <a href="mailto:ant57misc@gmail.com">
                <EmailIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.emailIcon}`}
                />
              </a>
              <a>
                <Tooltip
                  arrow
                  leaveDelay={2000}
                  placement="right"
                  classes={{
                    arrow: classesContact.arrowLight,
                    tooltip: classesContact.tooltipLight,
                  }}
                  interactive
                  disableFocusListener
                  title="Woah. Can't give my number out too easily: Akkb pz e wevf stnkpguafsh unuaioci dlvq glvp pyufvdhampn eug hxy albt vlduxu tstt suokwl kidrcwwkxu asplw zkqdsk ff afsh vx klgpdi pw dnjhyte mu icla kidrcwwkxu asplw drtt ilxuev dkgw aoise mz pqal aiyt wv wjja px dar shcau alf peawgauz sg tll ngh domdh lhv c vvkymavpwa xm aio liawgaz."
                >
                  <PhoneIcon
                    className={`${classes.light} ${classesContact.contactIcon} ${classesContact.phoneIcon}`}
                  />
                </Tooltip>
              </a>
              <a href="https://www.linkedin.com/in/anthein57/">
                <LinkedInIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.linkedInIcon}`}
                />
              </a>
              <a href="https://www.facebook.com/anthony.hein.5">
                <FacebookIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.facebookIcon}`}
                />
              </a>
              <a href="https://www.instagram.com/ant_hein57/?hl=en">
                <InstagramIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.instagramIcon}`}
                />
              </a>
              <a href="https://twitter.com/AntHein57">
                <TwitterIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.twitterIcon}`}
                />
              </a>
              <a href="https://www.github.com/AnthonyHein/">
                <GitHubIcon
                  className={`${classes.light} ${classesContact.contactIcon} ${classesContact.gitHubIcon}`}
                />
              </a>
            </div>
          </>
        }
        skinny={false}
      />
    </>
  );
}
