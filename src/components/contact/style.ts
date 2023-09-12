import { makeStyles } from "@material-ui/core/styles";

const useStylesContact = makeStyles((theme) => ({
  arrowLight: {
    color: theme.customPalette.light,
  },
  tooltipLight: {
    backgroundColor: theme.customPalette.light,
    color: theme.customPalette.primary,
  },
  contactIcon: {
    margin: "0.75rem 0.75rem 0 0",
    fontSize: "1rem !important",
  },
  emailIcon: {
    "&:hover": {
      color: "#C71610",
    },
  },
  phoneIcon: {
    "&:hover": {
      color: "#3DDC84",
      cursor: "pointer",
    },
  },
  linkedInIcon: {
    "&:hover": {
      color: "#0072B1",
    },
  },
  facebookIcon: {
    "&:hover": {
      color: "#3B5998",
    },
  },
  instagramIcon: {
    "&:hover": {
      color: "#3F729B",
    },
  },
  twitterIcon: {
    "&:hover": {
      color: "#38A1F3",
    },
  },
  gitHubIcon: {
    "&:hover": {
      color: "#AD5C51",
    },
  },
}));

export default useStylesContact;
