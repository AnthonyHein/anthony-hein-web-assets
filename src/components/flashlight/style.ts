import { makeStyles } from "@material-ui/core/styles";

const useStylesFlashlight = makeStyles((theme) => ({
  light: {
    color: theme.customPalette.light,
  },
  gray: {
    color: theme.customPalette.gray,
  },
  primary: {
    color: theme.customPalette.primary,
  },
  secondary: {
    color: theme.customPalette.secondary,
  },
  flashlight: {
    "&:hover": {
      opacity: 1,
      transition: "opacity 0.3s",
    },
    display: "inline",
    opacity: 0,
    transition: "opacity 30s",
    margin: "1.2rem 0.6rem 1.2rem 0rem",
  },
}));

export default useStylesFlashlight;
