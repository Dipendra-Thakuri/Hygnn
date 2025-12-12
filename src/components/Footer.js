// src/components/Footer.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FooterMain = styled.footer`
  background: ${({ theme }) => theme.background};
  padding: 80px 0 50px 0;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  column-gap: 60px;
  row-gap: 40px;

  @media (max-width: 900px) {
    column-gap: 40px;
  }
`;

const LeftSection = styled.div`
  flex: 0 0 auto;
  min-width: 260px;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const RightSection = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 60px;
  row-gap: 24px;

  @media (max-width: 900px) {
    column-gap: 40px;
  }
`;

const FooterColumn = styled.div`
  min-width: 150px;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BrandGif = styled.video`
  width: 140px;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
`;

const Copyright = styled.p`
  margin: 14px 0 20px 0;
  font-size: 0.95rem;
  opacity: 0.75;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const LanguageButton = styled.button`
  padding: 10px 16px;
  border-radius: 999px;
  border: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "1px solid rgba(148, 163, 184, 0.6)"
      : "1px solid rgba(255, 255, 255, 0.08)"};

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "rgba(15, 23, 42, 0.02)"
      : "rgba(255, 255, 255, 0.04)"};

  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: "Inter", "Segoe UI", sans-serif;
  transition: 0.25s ease;

  &:hover {
    border-color: #00c2a0;
    box-shadow: 0 0 18px rgba(0, 194, 160, 0.35);
  }
`;

const GlobeIcon = styled.span`
  font-size: 1.1rem;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  margin: 0 0 15px 0;
  font-family: "Inter", "Segoe UI", sans-serif;
  font-weight: 600;
`;

// Footer links are real <a> tags
const FooterLink = styled.a`
  margin: 6px 0;
  display: block;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  font-family: "Inter", "Segoe UI", sans-serif;

  text-decoration: none;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#9ca3af"};

  &:hover {
    color: #00c2a0;
  }
`;

const Footer = ({ isDark }) => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // ▶️ Play logo video once when footer enters viewport
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || hasPlayed) return;

    let observer;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || hasPlayed) return;

        const playPromise = videoEl.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => {
              setHasPlayed(true);
              if (observer) observer.unobserve(videoEl);
            })
            .catch(() => {
              // If autoplay fails, don't mark as played so it can retry
            });
        } else {
          setHasPlayed(true);
          if (observer) observer.unobserve(videoEl);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.4,
    });

    observer.observe(videoEl);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasPlayed]);

  const videoSrc = isDark ? "/hygnn-logo-dark.mp4" : "/hygnn-logo-light.mp4";

  return (
    <FooterMain>
      <FooterContainer>
        <LeftSection>
          <BrandRow>
            <BrandGif
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              // no loop, no autoPlay → played once by IntersectionObserver
            />
          </BrandRow>

          <Copyright>
            Copyright © {new Date().getFullYear()} Hygnn Inc.
          </Copyright>

          <LanguageButton>
            <GlobeIcon>🌐</GlobeIcon> English
          </LanguageButton>
        </LeftSection>

        <RightSection>
          {/* Company column */}
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#faq">Support</FooterLink>
            {/* For now, send legal links to FAQ/info section too.
                Replace with /privacy, /terms routes later if you add pages. */}
            <FooterLink href="#faq">Privacy Policy</FooterLink>
            <FooterLink href="#faq">Terms of Service</FooterLink>
          </FooterColumn>

          {/* Social media → external links */}
          <FooterColumn>
            <ColumnTitle>Social Media</ColumnTitle>
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

          {/* Resources column */}
          <FooterColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink href="#hero">Blog</FooterLink>
            <FooterLink href="#why-us">Case Studies</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#hygiene-level">Hygiene Checklist</FooterLink>
          </FooterColumn>
        </RightSection>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
