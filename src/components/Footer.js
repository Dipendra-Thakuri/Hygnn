// src/components/Footer.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

/* ------------------ Layout ------------------ */

const FooterMain = styled.footer.attrs(() => ({
  id: "footer",
}))`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: clamp(48px, 8vw, 80px) 0 clamp(32px, 6vw, 50px);
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
    gap: 2.8rem;
    text-align: center;
  }
`;

/* ------------------ Brand ------------------ */

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const BrandGif = styled.video`
  width: 140px;
  border-radius: 16px;
`;

/* ------------------ Social Icons (Mobile) ------------------ */

const SocialIconsRow = styled.div`
  display: none;
  gap: 22px;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "rgba(0,0,0,0.05)"
      : "rgba(255,255,255,0.08)"};

  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background: #00c2a0;
    color: #ffffff;
  }
`;

/* ------------------ Links ------------------ */

const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 900px) {
    &:nth-child(2) {
      display: none; /* hide Social column on mobile */
    }
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-family: "KentledgeMedium";
`;

const FooterLink = styled.a`
  display: block;
  margin: 0.4rem 0;
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#9ca3af" : "#4b5563"};
  font-family: "KentledgeLight";

  &:hover {
    color: #00c2a0;
  }
`;

/* ------------------ Copyright ------------------ */

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
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
        {/* BRAND + MOBILE SOCIAL */}
        <LeftSection>
          <BrandGif
            ref={videoRef}
            src={isDark ? "/hygnn-logo-dark.mp4" : "/hygnn-logo-light.mp4"}
            muted
            playsInline
          />

          {/* MOBILE SOCIAL ICONS */}
          <SocialIconsRow>
            <SocialIcon
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIcon>

            <SocialIcon
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </SocialIcon>
          </SocialIconsRow>

          <Copyright>
            © {new Date().getFullYear()} Hygnn Inc.
          </Copyright>
        </LeftSection>

        {/* LINKS */}
        <RightSection>
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#faq">Support</FooterLink>
            <FooterLink href="#faq">Privacy Policy</FooterLink>
            <FooterLink href="#faq">Terms of Service</FooterLink>
          </FooterColumn>

          {/* SOCIAL (DESKTOP ONLY) */}
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
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
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
