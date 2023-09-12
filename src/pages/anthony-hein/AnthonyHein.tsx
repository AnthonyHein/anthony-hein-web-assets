import React from "react";
import useStyles from "../../config/style";
import { Color } from "../../config/theme";
import activeMember from "../../config/user";

import { Typography } from "@material-ui/core";

import Contact from "../../components/contact/Contact";
import Flashlight from "../../components/flashlight/Flashlight";
import Section from "../../components/section/Section";
import SectionHeader from "../../components/section-header/SectionHeader";

export default function AnthonyHein(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div style={{ cursor: "default", paddingTop: "3.25rem" }}>
        <Section
          color={Color.primary}
          content={
            <div>
              <Typography className={`${classes.body} ${classes.gray}`}>
                Welcome to a webpage about...
              </Typography>
              {activeMember.split("").map((c) => {
                return c === " " ? (
                  <Typography
                    className={classes.title}
                    style={{ display: "inline" }}
                  >
                    &nbsp;
                  </Typography>
                ) : (
                  <Typography
                    className={classes.title}
                    style={{ display: "inline" }}
                  >
                    <Flashlight color={Color.gray} content={c} />
                  </Typography>
                );
              })}
            </div>
          }
          skinny={false}
        />
      </div>
      <Section
        color={Color.light}
        content={
          <>
            <SectionHeader
              color={Color.primary}
              id="section"
              content={<>Section</>}
            />
            <div>
              <Typography className={`${classes.body} ${classes.primary}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                in efficitur purus, a lobortis ipsum. Mauris consectetur, est a
                vestibulum pellentesque, metus lectus accumsan quam, id accumsan
                enim eros ut massa. Etiam erat risus, dictum non tortor nec,
                aliquet consectetur est. Cras vestibulum, sapien ut mattis
                bibendum, est ex finibus risus, nec dignissim nisl felis a
                massa. Vestibulum nunc neque, dignissim eget dui a, pretium
                dignissim tellus. Aliquam eu nisi lectus. Pellentesque euismod
                tellus vitae elit tincidunt vehicula ut non diam. In enim ipsum,
                sodales vel metus id, ullamcorper iaculis lorem. Nulla in tortor
                eget est viverra bibendum nec in dolor. Sed fermentum nec ex vel
                vestibulum.
              </Typography>
              <br />
              <Typography className={`${classes.body} ${classes.primary}`}>
                Donec malesuada facilisis lacus, ullamcorper congue urna maximus
                nec. Nunc tincidunt, orci vel maximus fringilla, tortor augue
                vestibulum quam, quis mattis lacus nibh eu lacus. Cras at quam a
                lectus porta tempus nec eget lacus. Nunc vitae ornare nunc.
                Curabitur vel ipsum mauris. Mauris ultrices justo massa, id
                condimentum sem rhoncus quis. Suspendisse sed tincidunt arcu.
                Aenean varius placerat felis sit amet ullamcorper.
              </Typography>
              <br />
              <Typography className={`${classes.body} ${classes.primary}`}>
                Donec ac purus at tellus faucibus congue. Nunc accumsan mollis
                nisl, sit amet facilisis dui ornare a. Aliquam eleifend eros in
                nisl pretium iaculis. Donec mollis nisi libero, sit amet
                placerat turpis sodales non. In porttitor leo urna, eu viverra
                ex facilisis vel. Phasellus posuere sollicitudin quam ac
                aliquam. Quisque cursus ante id risus laoreet dignissim. Proin
                nec tincidunt augue. Morbi in urna bibendum nisl elementum
                mattis. Aliquam erat ex, posuere quis rhoncus at, rhoncus vitae
                mi. Quisque tellus velit, condimentum id enim id, vestibulum
                consectetur enim. Integer sagittis feugiat imperdiet. Nunc
                pharetra vulputate lacus non lobortis. Quisque aliquet tellus
                quis ligula mattis aliquam. Donec ac auctor lacus.
              </Typography>
              <br />
              <Typography className={`${classes.body} ${classes.primary}`}>
                Donec cursus sit amet quam ut finibus. Integer magna justo,
                pellentesque id mattis eget, dignissim vitae nibh. Nullam porta
                at nisi eu finibus. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Praesent nisi nibh,
                mattis vitae sem vel, laoreet commodo neque. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nulla ac tellus vitae leo auctor porttitor. Pellentesque
                id diam quam. Nam iaculis lacus justo, id cursus massa posuere
                in. Vestibulum accumsan justo magna, condimentum bibendum lorem
                lacinia quis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Sed mattis at urna
                quis venenatis. Suspendisse feugiat turpis lorem, ultrices
                consectetur justo gravida non. Proin tempor felis at arcu
                consequat, in finibus ex semper. Fusce convallis turpis ut
                convallis luctus.
              </Typography>
              <br />
              <Typography className={`${classes.body} ${classes.primary}`}>
                Cras in nunc sed ex egestas ullamcorper sit amet non purus.
                Praesent viverra fringilla ipsum nec efficitur. Pellentesque id
                elit vel eros consequat dictum. Morbi id tempus metus, sed
                eleifend lacus. Donec at tempor eros, quis tempus nunc. Quisque
                lobortis erat eget arcu blandit, vel tempor lectus ultricies.
                Maecenas et accumsan massa. Pellentesque faucibus enim a metus
                fermentum, sed vulputate augue faucibus.
              </Typography>
            </div>
          </>
        }
        skinny={false}
      />
      <Contact />
    </>
  );
}
