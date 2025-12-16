// src/components/Footer.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/* ------------------ Layout ------------------ */

const FooterMain = styled.footer`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: clamp(48px, 8vw, 80px) 0
    clamp(32px, 6vw, 50px);
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

/* ------------------ Left / Brand ------------------ */

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
`;

const BrandGif = styled.video`
  width: 140px;
  border-radius: 16px;
`;

const Copyright = styled.p`
  font-size: 0.95rem;
  opacity: 0.75;
`;

const LanguageButton = styled.button`
  margin-top: 0.5rem;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(148,163,184,0.6)"};

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255,255,255,0.04)"
      : "rgba(15,23,42,0.02)"};

  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: #00c2a0;
  }
`;

/* ------------------ Right / Links ------------------ */

const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FooterLink = styled.a`
  display: block;
  margin: 0.4rem 0;
  font-size: 0.95rem;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#9ca3af" : "#4b5563"};

  &:hover {
    color: #00c2a0;
  }
`;

/* ------------------ Component ------------------ */

const Footer = ({ isDark }) => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (!videoRef.current || played) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          videoRef.current
            .play()
            .then(() => setPlayed(true))
            .catch(() => {});
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [played]);

  return (
    <FooterMain>
      <FooterContainer>
        <LeftSection>
          <BrandRow>
            <BrandGif
              ref={videoRef}
              src={isDark ? "/hygnn-logo-dark.mp4" : "/hygnn-logo-light.mp4"}
              muted
              playsInline
            />
          </BrandRow>

          <Copyright>
            © {new Date().getFullYear()} Hygnn Inc.
          </Copyright>

          <LanguageButton>🌐 English</LanguageButton>
        </LeftSection>

        <RightSection>
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#faq">Support</FooterLink>
            <FooterLink href="#faq">Privacy Policy</FooterLink>
            <FooterLink href="#faq">Terms of Service</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Social</ColumnTitle>
            <FooterLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </FooterLink>
            <FooterLink
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink href="#hero">Blog</FooterLink>
            <FooterLink href="#why-us">Case Studies</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#hygiene-level">
              Hygiene Checklist
            </FooterLink>
          </FooterColumn>
        </RightSection>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
