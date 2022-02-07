import styled, { createGlobalStyle } from 'styled-components';

const hueColor = `220`;

export const transition = `all 0.3s ease-in`;

export const HeaderHeight = `5rem`;

export const lightTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 70%, 96%)`,
    bodyColor: `hsl(${hueColor}, 60%, 99%)`,
    containerColor: '#eee',
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    scrollBarHover: `hsl(${hueColor}, 8%, 65%)`,
    copyColor: `#a30908`,
    iconColor: `#000`,
    overlayColor: `rgba(0, 0, 0, 0.5)`
  }
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 29%, 16%)`,
    bodyColor: `hsl(${hueColor}, 28%, 13%)`,
    containerColor: `hsl(${hueColor}, 29%, 16%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    scrollBarHover: `hsl(${hueColor}, 8%, 65%)`,
    copyColor: `#318ce7`,
    iconColor: `#fff`,
    overlayColor: `rgba(0, 0, 0, 0.5)`
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyColor};
  }

    /* Scroll Bar */
    ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumbColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollBarHover};
  }
`;

// Global Classes
export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.containerColor};
  width: 90%;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;