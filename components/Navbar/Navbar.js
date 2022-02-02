import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
    OverLay,
  Nav,
  NavLogo,
  NavList,
  NavItem,
  NavLink,
  BurgerIcon,
  BurgerBar,
  DarkContainer,
} from "./styledNavbar";

export const Navbar = ({ toggleTheme, checkTheme, data }) => {
    const [toggleShow, setToggleShow] = useState(false);

  const navData = data.links.map((link) => (
    <NavItem key={link.id}>
      <NavLink href="#">{link.title}</NavLink>
    </NavItem>
  ));

  return (
    <Nav>
        <OverLay toggleShow={toggleShow} onClick={() => setToggleShow(false)} />
      <NavLogo>
          <img src={data.img} />
      </NavLogo>

      <BurgerIcon onClick={() => setToggleShow(state => !state)}>
          <BurgerBar toggleShow={toggleShow} className="bar-1"></BurgerBar>
          <BurgerBar toggleShow={toggleShow} className="bar-2"></BurgerBar>
          <BurgerBar toggleShow={toggleShow} className="bar-3"></BurgerBar>
      </BurgerIcon>

      <NavList toggleShow={toggleShow}>{navData}</NavList>

      <DarkContainer>
          {toggleTheme === "dark" ? (
              <BsFillSunFill onClick={checkTheme} />
          ) : (
              <BsFillMoonFill onClick={checkTheme} />
          )}
      </DarkContainer>
    </Nav>
  );
};
