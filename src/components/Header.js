// src/components/Header.js
import React, {
  useEffect,
  useState,
  useRef,
  useCallback
} from "react";
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
  padding: 1.5rem 2.5rem 0rem 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
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
  padding: 0;
  cursor: pointer;

  font-size: clamp(0.95rem, 3vw, 1.125rem);
  font-family: "KentledgeBold";
  color: ${({ theme }) => theme.text};

  transition: color 0.25s ease;

  &:hover {
    color: #00eaff;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.5rem);

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
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: clamp(80px, 12vh, 140px) 1.25rem
           clamp(60px, 10vh, 100px);

  transform: translateY(${({ open }) => (open ? "0%" : "-100%")});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

/* ------------------ Theme Toggle ------------------ */

const ThemeToggle = styled.button`
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${({ theme }) => theme.cardBackground};
  cursor: pointer;
`;

/* ------------------ Component ------------------ */

const Header = ({ isDark: controlledIsDark, setIsDark: controlledSetIsDark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
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
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [location.pathname, navigate]
  );

  /* Click outside to close */
  useEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);

  /* Swipe down to close */
  const onTouchStart = (e) => {
  startYRef.current = e.touches[0].clientY;
};

const onTouchMove = (e) => {
  const delta = e.touches[0].clientY - startYRef.current;
  if (delta > 60) setIsMenuOpen(false);
};


  return (
    <>
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
            <NavLink onClick={() => navigate("/contact")}>
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
          ref={menuRef}
          open={isMenuOpen}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <NavLink onClick={() => navigate("/about")}>
            Hygiene Partner
          </NavLink>
          <NavLink onClick={() => goToSection("why-us")}>Why Us</NavLink>
          <NavLink onClick={() => navigate("/contact")}>
            Contact Us
          </NavLink>
          <ThemeToggle onClick={toggleTheme}>🌓</ThemeToggle>
        </MobileMenu>
      </HeaderMain>

      <Backdrop
        open={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
