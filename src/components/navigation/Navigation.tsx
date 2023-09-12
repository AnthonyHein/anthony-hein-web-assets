import React from "react";
import { ListItem, Typography } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import navigationData, { NavigationItem } from "./navigationData";
import useStylesNavigation from "./style";

export default function Navigation(props: { width: number }): JSX.Element {
  const classesNavigation = useStylesNavigation();

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <div className={classesNavigation.navigation}>
        <div style={{ marginRight: "auto" }}>
          <ListItem
            button
            component={Link}
            to="/home"
            key="home"
            scroll={(el: any) => scrollWithOffset(el)}
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <Typography className={classesNavigation.navigationText}>
              Anthony Hein
            </Typography>
          </ListItem>
        </div>
        {props.width > 960 ? (
          <div className={classesNavigation.navigationItems}>
            {navigationData.map((navItem: NavigationItem) => {
              return (
                <>
                  <ListItem
                    button
                    component={Link}
                    to={`#${navItem.slug}`}
                    key={navItem.slug}
                    scroll={(el: any) => scrollWithOffset(el)}
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    <Typography className={classesNavigation.navigationText}>
                      {navItem.name}
                    </Typography>
                  </ListItem>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
