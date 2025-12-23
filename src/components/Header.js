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
  max-width: 100svw;
  margin: 0 auto;
  padding: 1.25rem clamp(1rem, 4vw, 3.5rem);

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
  width: clamp(80px, 19vw, 130px);
`;

/* ------------------ Nav ------------------ */

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  @media (max-width: 768px) {
    display: none;
  }
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

/* ------------------ SignUp Button ------------------ */

const GradientBorder = styled.div`
  position: relative;
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
  padding: 10px 18px 6px 18px;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  font-family: "KentledgeMedium";
  cursor: pointer;
  white-space: nowrap;

  position: relative;
  z-index: 1;
`;

/* ------------------ Hamburger ------------------ */

const Hamburger = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    position: absolute;
    left: 8px;
    width: 26px;
    height: 2px;
    background: ${({ theme }) => theme.text};
    transition: transform 0.3s ease, opacity 0.25s ease;
  }

  span:nth-child(1) {
    top: 14px;
    transform: ${({ open }) =>
      open ? "rotate(45deg) translateY(6px)" : "none"};
  }

  span:nth-child(2) {
    top: 20px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: 26px;
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translateY(-6px)" : "none"};
  }
`;

/* ------------------ Mobile Menu ------------------ */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 998;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;

  transform: translateY(${({ open }) => (open ? "0%" : "-100%")});
  transition: transform 0.4s ease;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-family: "KentledgeBold";
  color: ${({ theme }) => theme.text};
`;

const MobileSignUp = styled.button`
  padding: 12px 30px;
  border-radius: 999px;
  border: 1px solid #38bdf8;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-family: "KentledgeMedium";
  font-size: 1.1rem;
  cursor: pointer;
`;

/* ------------------ Component ------------------ */

const Header = ({ isDark: controlledIsDark, setIsDark: controlledSetIsDark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  /* Header height → CSS variable */
  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const goToSection = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      );
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Backdrop open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />

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
              <SignUpButton onClick={() => navigate("/signup")}>
                Sign Up
              </SignUpButton>
            </GradientBorder>
          </DesktopNav>

          <Hamburger open={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </HeaderWrapper>

        <MobileMenu open={isMenuOpen}>
          <MobileNavLink onClick={() => goToSection("why-us")}>
            Why Us
          </MobileNavLink>
          <MobileNavLink onClick={() => navigate("/about")}>
            Our Services
          </MobileNavLink>
          <MobileNavLink onClick={() => navigate("/contact")}>
            Contact Us
          </MobileNavLink>

          <MobileSignUp onClick={() => navigate("/signup")}>
            Sign Up
          </MobileSignUp>
        </MobileMenu>
      </HeaderMain>
    </>
  );
};

export default Header;
