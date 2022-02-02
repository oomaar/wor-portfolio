import styled from 'styled-components';
import { HeaderHeight, transition } from '../../global/GlobalStyle';

export const OverLay = styled.div`
  background-color: ${({ theme }) => theme.colors.overlayColor};
  position: fixed;
  top: 12rem;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ toggleShow }) => toggleShow ? "1" : 0};
  transition: ${transition};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.containerColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

export const NavLogo = styled.div`
  margin: 0;
  cursor: pointer;
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 1;

  img {
    width: 120px;
    filter: invert(1);
  }

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  margin: 0;
  background-color: #000;
  padding: ${({ toggleShow }) => toggleShow ? "1rem 0" : "0"};
  height: ${({ toggleShow }) => toggleShow ? "12rem" : "0"};
  overflow: hidden;
  transition: ${transition};

  @media screen and (min-width: 768px) {
    background: transparent;
    flex-direction: row;
    padding: 0;
    height: ${HeaderHeight};
    margin: 0  1rem 0 auto;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0.1rem 0;

  @media screen and (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColorLight};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 0;
  }
`;

export const BurgerIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  cursor: pointer;
  z-index: 200;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerBar = styled.div`
  background-color: ${({ theme }) => theme.colors.textColor};
  margin: 0.4rem 0;
  width: 25px;
  height: 4px;
  border-radius: 1rem;
  transition: ${transition};

  &.bar-1 {
    background-color: ${({ toggleShow }) => toggleShow && "#f00"};
    transform: ${({ toggleShow }) => toggleShow && "rotateZ(-45deg) translateX(-0.9rem)" };
  }

  &.bar-2 {
    opacity: ${({ toggleShow }) => toggleShow ? "0" : "1"};
  }

  &.bar-3 {
    background-color: ${({ toggleShow }) => toggleShow && "#f00"};
    transform: ${({ toggleShow }) => toggleShow && "rotateZ(45deg) translateX(-0.9rem)" };
  }
`;

export const DarkContainer = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  position: absolute;
  right: 4rem;
  top: 1rem;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;