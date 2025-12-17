// src/components/Header.js
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
  max-width: 1400px;
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
  width: clamp(110px, 22vw, 160px);
`;

const NavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "KentledgeBold";
  color: ${({ theme }) => theme.text};

  &:hover {
    color: #00eaff;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  @media (max-width: 768px) {
    display: none;
  }
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

/* ------------------ Overlay + Menu ------------------ */

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
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-family: "KentledgeBold";
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

const MobileThemeToggle = styled.button`
  margin-top: 1.5rem;
  padding: 8px 18px;
  font-size: 1rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: ${({ theme }) => theme.cardBackground};
  cursor: pointer;
`;

/* ------------------ Component ------------------ */

const Header = ({ isDark: controlledIsDark, setIsDark: controlledSetIsDark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const startYRef = useRef(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const applyTheme = useCallback(
    (dark) => {
      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light"
      );
      localStorage.setItem(storageKey, dark ? "dark" : "light");
      setIsDark(dark);
      controlledSetIsDark?.(dark);
    },
    [controlledSetIsDark]
  );

  const toggleTheme = () => applyTheme(!isDark);

  const goToSection = useCallback(
    (id) => {
      setIsMenuOpen(false);
      if (location.pathname !== "/") {
        navigate("/");
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        );
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [location.pathname, navigate]
  );

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  /* Swipe down to close */
  const onTouchStart = (e) => {
    startYRef.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    if (e.touches[0].clientY - startYRef.current > 60) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Backdrop open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />

      <HeaderMain>
        <HeaderWrapper>
          <LogoButton onClick={() => navigate("/")}>
            <HeaderLogo
              src={isDark ? "/InvertedLogo.png" : "/PrimaryLogo.png"}
              alt="Hygnn logo"
            />
          </LogoButton>

          <DesktopNav>
            <NavLink onClick={() => navigate("/about")}>
              Hygiene Partner
            </NavLink>
            <NavLink onClick={() => goToSection("why-us")}>Why Us</NavLink>
            <NavLink onClick={() => goToSection("contact")}>
              Contact Us
            </NavLink>
            <ThemeToggle onClick={toggleTheme}>🌓</ThemeToggle>
          </DesktopNav>

          <Hamburger
            open={isMenuOpen}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </HeaderWrapper>

        <MobileMenu
          open={isMenuOpen}
          role="dialog"
          aria-modal="true"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <MobileCloseButton onClick={() => setIsMenuOpen(false)}>
            ✕
          </MobileCloseButton>

          <MobileNavLink onClick={() => navigate("/about")}>
            Hygiene Partner
          </MobileNavLink>
          <MobileNavLink onClick={() => goToSection("why-us")}>
            Why Us
          </MobileNavLink>
          <MobileNavLink
            onClick={() => {
              goToSection("contact");
              setIsMenuOpen(false);
            }}
          >
            Contact Us
          </MobileNavLink>

          <MobileThemeToggle onClick={toggleTheme}>
            {isDark ? "🌙 Dark mode" : "☀️ Light mode"}
          </MobileThemeToggle>
        </MobileMenu>
      </HeaderMain>
    </>
  );
};

export default Header;
