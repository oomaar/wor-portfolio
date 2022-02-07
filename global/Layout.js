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
  const [toggleTheme, setToggleTheme] = useState("");

  const checkTheme = () => {
    if (toggleTheme === "light") {
      setToggleTheme("dark");
      localStorage.setItem("worex-dark-value", "dark");
    } else if (toggleTheme === "dark") {
      setToggleTheme("light");
      localStorage.setItem("worex-dark-value", "light");
    }
  };

  useEffect(() => {
    const themeValue = localStorage.getItem("worex-dark-value");
    setToggleTheme(themeValue);
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
