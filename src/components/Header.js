import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const storageKey = "theme-preference";

/* ------------------ Layout ------------------ */

const HeaderMain = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 1000;
`;

const HeaderWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 1.25rem clamp(1.5rem, 3vw, 3.5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: clamp(6rem, 9vw, 8rem);
`;

/* ------------------ Navigation ------------------ */

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "KentledgeLight";
  color: ${({ theme }) => theme.text};

  &:hover {
    color: #00eaff;
  }
`;

const ThemeToggle = styled.button`
  min-width: 44px;
  min-height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${({ theme }) => theme.cardBackground};
  cursor: pointer;
`;

/* ------------------ Sign Up Button ------------------ */

const GradientBorder = styled.div`
  border-radius: 999px;
  padding: 1.5px;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0,
    #00c2a0,
    #00b1d5
  );
  background-size: 300% 100%;
  animation: borderFlow 6s linear infinite;

  @keyframes borderFlow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 300% 50%;
    }
  }
`;

const SignUpButton = styled.button`
  padding: 10px 20px 8px 20px;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  font-family: "KentledgeMedium";
  cursor: pointer;
  white-space: nowrap;
`;

/* ------------------ Component ------------------ */

const Header = ({ isDark: controlledIsDark, setIsDark: controlledSetIsDark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  /* ------------------ Header Height Sync ------------------ */
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  /* ------------------ Theme State ------------------ */
  const [isDark, setIsDark] = useState(
    localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey) === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const applyTheme = useCallback(
    (dark) => {
      localStorage.setItem(storageKey, dark ? "dark" : "light");
      setIsDark(dark);
      controlledSetIsDark?.(dark);
    },
    [controlledSetIsDark]
  );

  const toggleTheme = () => applyTheme(!isDark);

  /* ------------------ Navigation Helpers ------------------ */
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      );
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ------------------ Render ------------------ */
  return (
    <HeaderMain ref={headerRef}>
      <HeaderWrapper>
        <LogoButton onClick={() => navigate("/")}>
          <HeaderLogo
            src={isDark ? "/InvertedLogo.png" : "/PrimaryLogo.png"}
            alt="Hygnn logo"
          />
        </LogoButton>

        <DesktopNav>
          <ThemeToggle onClick={toggleTheme}>🌓</ThemeToggle>

          <NavLink onClick={() => goToSection("why-us")}>Why Us</NavLink>
          <NavLink onClick={() => navigate("/about")}>Our Services</NavLink>
          <NavLink onClick={() => navigate("/contact")}>Contact Us</NavLink>

          <GradientBorder>
            <SignUpButton onClick={() => navigate("/login")}>
              Sign Up
            </SignUpButton>
          </GradientBorder>
        </DesktopNav>
      </HeaderWrapper>
    </HeaderMain>
  );
};

export default Header;
