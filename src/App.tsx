import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";

import AnthonyHein from "./pages/anthony-hein/AnthonyHein";

import "./App.css";
import theme, { Color } from "./config/theme";

function App(): JSX.Element {
  const width = window.innerWidth;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          position: "fixed",
          width: "100%",
          borderBottom: `0.0625rem solid ${theme.customPalette.primary}`,
          zIndex: 999,
        }}
      >
        <Section
          color={Color.light}
          content={<Navigation width={width} />}
          skinny={true}
        />
      </div>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              {() => {
                window.location.href = "https://www.anthonyhein.com";
                return null;
              }}
            </>
          }
        />
        <Route key="/" path="/" element={<AnthonyHein />} />
      </Routes>
      <Section color={Color.primary} content={<Footer />} skinny={true} />
    </ThemeProvider>
  );
}

export default App;
