// src/components/Header.js
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const storageKey = "theme-preference";

const HeaderMain = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const HeaderLogo = styled.img`
  width: 160px;
  cursor: pointer;
  padding: 10px;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-family: "KentledgeBold";
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    color: #00eaff;
  }
`;

const ThemeToggle = styled.button`
  --icon-fill: ${({ theme }) => theme.text};
  --icon-fill-hover: ${({ theme }) => theme.text};
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.15s ease;
  line-height: 0;
  min-width: 48px;
  min-height: 48px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(0, 234, 255, 0.15);
    outline-offset: 3px;
  }

  .sun-and-moon > :is(.moon, .sun, .sun-beams) {
    transform-origin: center;
  }

  .sun-and-moon > :is(.moon, .sun) {
    fill: var(--icon-fill);
  }

  &:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun) {
    fill: var(--icon-fill-hover);
  }

  .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill);
    stroke-width: 2px;
  }

  &:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill-hover);
  }
`;

const injectRuntimeThemeCss = () => {
  const id = "header-theme-toggle-runtime-css";
  if (document.getElementById(id)) return;

  const css = `
    [data-theme="dark"] .sun-and-moon > .sun { transform: scale(1.75); }
    [data-theme="dark"] .sun-and-moon > .sun-beams { opacity: 0; transform: rotateZ(-25deg); }
    [data-theme="dark"] .sun-and-moon > .moon > circle { transform: translateX(-7px); }

    @media (prefers-reduced-motion: no-preference) {
      .sun-and-moon > .sun {
        transition: transform .5s cubic-bezier(.6,1.5,.7,1);
      }
      .sun-and-moon > .sun-beams {
        transition: transform .5s cubic-bezier(.3,.7,.2,1), opacity .5s ease;
      }
      .sun-and-moon .moon > circle {
        transition: transform .25s ease-out;
      }
      @supports (cx: 1) {
        .sun-and-moon .moon > circle {
          transition: cx .25s ease-out;
        }
      }
      [data-theme="dark"] .sun-and-moon > .sun {
        transition-timing-function: ease;
        transition-duration: .25s;
        transform: scale(1.75);
      }
      [data-theme="dark"] .sun-and-moon > .sun-beams {
        transition-duration: .15s;
        transform: rotateZ(-25deg);
      }
      [data-theme="dark"] .sun-and-moon > .moon > circle {
        transition-duration: .5s;
        transition-delay: .25s;
      }
    }
  `;

  const style = document.createElement("style");
  style.id = id;
  style.innerHTML = css;
  document.head.appendChild(style);
};

const Header = ({ isDark: controlledIsDark, setIsDark: controlledSetIsDark }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === "dark" || stored === "light") return stored === "dark";
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const mountedRef = useRef(false);

  const reflectPreference = (dark) => {
    try {
      document.firstElementChild.setAttribute("data-theme", dark ? "dark" : "light");
    } catch (e) {}
    const btn = document.querySelector("#theme-toggle");
    if (btn) btn.setAttribute("aria-label", dark ? "dark" : "light");
  };

  const setPreference = (dark) => {
    setIsDark(dark);
    try {
      localStorage.setItem(storageKey, dark ? "dark" : "light");
    } catch (e) {}
    if (typeof controlledSetIsDark === "function") controlledSetIsDark(dark);
    reflectPreference(dark);
  };

  const handleToggle = () => setPreference(!isDark);

  useEffect(() => {
    if (typeof controlledIsDark === "boolean") {
      setIsDark(controlledIsDark);
      reflectPreference(controlledIsDark);
    }
    injectRuntimeThemeCss();
    mountedRef.current = true;

    const mm = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      try {
        if (!localStorage.getItem(storageKey)) {
          const autoDark = e.matches;
          setIsDark(autoDark);
          reflectPreference(autoDark);
          if (typeof controlledSetIsDark === "function") controlledSetIsDark(autoDark);
        }
      } catch (err) {}
    };

    if (mm && mm.addEventListener) mm.addEventListener("change", onSystemChange);
    else if (mm && mm.addListener) mm.addListener(onSystemChange);

    reflectPreference(isDark);

    return () => {
      if (mm && mm.removeEventListener) mm.removeEventListener("change", onSystemChange);
      else if (mm && mm.removeListener) mm.removeListener(onSystemChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;
    if (typeof controlledIsDark === "boolean" && controlledIsDark !== isDark) {
      setIsDark(controlledIsDark);
      reflectPreference(controlledIsDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlledIsDark]);

  return (
    <HeaderMain id="header">
      <HeaderWrapper>
        <LogoLink href="#header" aria-label="Hygnn Home">
          <HeaderLogo
            src={isDark ? "/InvertedLogo.png" : "/PrimaryLogo.png"}
            alt="Hygnn logo"
          />
        </LogoLink>

        <HeaderNav>
          <NavLink href="#about-us">Hygiene Partner</NavLink>
          <NavLink href="#why-us">Why Us</NavLink>
          <NavLink href="#contact-us">Contact Us</NavLink>

          <ThemeToggle
            id="theme-toggle"
            className="theme-toggle"
            title="Toggles light & dark"
            aria-label={isDark ? "dark" : "light"}
            aria-live="polite"
            onClick={handleToggle}
          >
            <svg
              className="sun-and-moon"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
            >
              {/* Mask element is the one we target with .moon in CSS */}
              <mask className="moon" id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle cx="24" cy="10" r="6" fill="black" />
              </mask>

              <circle
                className="sun"
                cx="12"
                cy="12"
                r="6"
                mask="url(#moon-mask)"
                fill="currentColor"
              />

              <g className="sun-beams" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </ThemeToggle>
        </HeaderNav>
      </HeaderWrapper>
    </HeaderMain>
  );
};

export default Header;
