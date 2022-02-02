import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "../components";
import {
  darkTheme,
  GlobalStyle,
  HeaderHeight,
  lightTheme,
} from "./GlobalStyle";
import websiteData from "../data/websiteData.json";
import styled from "styled-components";

const ApplicationLayout = styled.div`
  margin: calc(${HeaderHeight} + 1rem) 0 0;
`;

export const Layout = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState("light");

  const checkTheme = () => {
    switch (toggleTheme) {
      case "light":
        setToggleTheme("dark");
        localStorage.setItem("worex-dark-value", "dark");
        return document.documentElement.setAttribute("data-theme", "dark");

      case "dark":
        setToggleTheme("light");
        localStorage.setItem("worex-drak-value", "light");
        return document.documentElement.setAttribute("data-theme", "light");

      default:
        setToggleTheme("light");
        localStorage.setItem("worex-drak-value", "light");
        return document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("worex-dark-value")) {
      setToggleTheme(localStorage.getItem("worex-dark-value"));
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      checkTheme(null);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={toggleTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar
          toggleTheme={toggleTheme}
          data={websiteData.nav}
          checkTheme={checkTheme}
        />
        <ApplicationLayout>{children}</ApplicationLayout>
      </ThemeProvider>
    </>
  );
};
