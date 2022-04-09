import React from "react";
import styled from "styled-components/macro";

import MaxWidthWrapper from "../MaxWidthWrapper";
import VercelLogo from "../../App/assets/vercel-logotype-light.svg";

import { ChevronDown } from "react-feather";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <LogoWrapper>
          <LogoLink to="/">
            <Logo alt="" src={VercelLogo} />
          </LogoLink>
        </LogoWrapper>

        <Nav>
          <NavLinkWrapper>
            <NavLinkItem to="/">
              <span>Features</span>
              <IconWrapper>
                <ChevronDown color="currentColor" size={16} strokeWidth={1.5} />
              </IconWrapper>
            </NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLinkItem to="/">Templates</NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLinkItem to="/">Integrations</NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLinkItem to="/">Customers</NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLinkItem to="/">Pricing</NavLinkItem>
          </NavLinkWrapper>
        </Nav>

        <NavRight>
          <NavLinkWrapper>
            <NavLinkItem to="/">Contact</NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLinkItem to="/">Login</NavLinkItem>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <Button to="/signup">Try Vercel</Button>
          </NavLinkWrapper>
        </NavRight>
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 16px 0;
  position: sticky;
  z-index: 2;
  top: 0;
  isolation: isolate;
  background: var(--header-background);

  @supports (backdrop-filter: saturate(180%) blur(5px)) {
    /*
    The main experience, for Chrome/Safari users.
    Blurry backdrops.
  */
    & {
      backdrop-filter: saturate(180%) blur(5px);
    }
  }
`;

const HeaderContent = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  flex: 1;
  height: 26px;
  display: flex;
  justify-content: flex-start;
`;

const LogoLink = styled(Link)``;

const Logo = styled.img`
  height: 100%;
`;

const Nav = styled.ul`
  display: flex;
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-500);
  align-items: center;
`;

const NavLinkWrapper = styled.li`
  &:not(:first-of-type) {
    margin-left: calc(var(--page-gap) / 2);
  }
`;

const NavLinkItem = styled(NavLink)`
  display: flex;
  padding: calc(var(--page-gap) / 4);
  will-change: transform;
  transition-property: color;
  transition-duration: 150ms;

  &:hover {
    color: var(--color-white);
  }
`;

const NavRight = styled(Nav)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled(Link)`
  height: 32px;
  border-radius: 4px;
  background-color: var(--color-white);
  color: var(--color-black);
  display: grid;
  place-content: center;
  border: 1px solid var(--color-white);
  padding: 12px;
  margin-left: calc(var(--page-gap) / 4);
  font-weight: var(--fw-medium);
  white-space: nowrap;
  will-change: transform;
  transition-property: background-color, color;
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const IconWrapper = styled.span`
  display: grid;
  place-content: center;
  margin-left: 6px;
  transform: translateY(2px);
`;

export default Header;
