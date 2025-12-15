// src/components/ContactSection.js
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 14px;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  /* theme-aware text color */
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

/* ===== CAROUSEL ===== */
/* One long track with two copies of the icons; scroll -50% for seamless loop */

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const IconsRowWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const IconsRowShell = styled.div`
  max-width: 900px;
  width: 100%;
  overflow: hidden;
  backdrop-filter: blur(18px);
  padding: 10px 0;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: inline-flex;
  gap: 18px;
  animation: ${marquee} 22s linear infinite;
  will-change: transform;
`;

const IconLink = styled.a`
  width: 64px;
  height: 64px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  /* Shadow only in dark mode */
  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "none"
      : "0 14px 30px rgba(15, 23, 42, 0.7)"};

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "#f9fafb"
      : "rgba(15, 23, 42, 0.96)"};

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const AppLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const EdgeFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70px;
  pointer-events: none;

  @media (max-width: 640px) {
    width: 45px;
  }
`;

const LeftFade = styled(EdgeFade)`
  left: 0;
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0))"
      : "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))"};
`;

const RightFade = styled(EdgeFade)`
  right: 0;
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(to left, rgba(255,255,255,0.9), rgba(255,255,255,0))"
      : "linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0))"};
`;

const Caption = styled.p`
  margin-top: 18px;
  font-size: 0.9rem;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#6b7280" : "#9ca3af"};
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  padding: 13px 30px;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  background: linear-gradient(180deg, #ffffff, #dfe3e8);
  color: #000000;

  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "none"
      : "0 18px 35px rgba(15, 23, 42, 0.55)"};

  transition: 0.2s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }
`;

const appIcons = [
  {
    src: "/assets/whatsapp.png",
    alt: "WhatsApp",
    link: "https://web.whatsapp.com",
  },
  {
    src: "/assets/facebook.png",
    alt: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    src: "/assets/linkedin.png",
    alt: "LinkedIn",
    link: "https://www.linkedin.com",
  },
  {
    src: "/assets/instagram.png",
    alt: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    src: "/assets/twitter.png",
    alt: "Twitter",
    link: "https://twitter.com",
  },
  {
    src: "/assets/zoom.png",
    alt: "Zoom",
    link: "https://zoom.us",
  },
  {
    src: "/assets/google-meet.png",
    alt: "Google Meet",
    link: "https://meet.google.com",
  },
  {
    src: "/assets/telegram.png",
    alt: "Telegram",
    link: "https://telegram.org",
  },
  {
    src: "/assets/teams.png",
    alt: "Microsoft Teams",
    link: "https://teams.microsoft.com",
  },
];

// 👇 duplicate list for seamless loop
const doubledIcons = [...appIcons, ...appIcons];

const ContactSection = () => {
  return (
    <Section id="contact-us">
      <Container>
        <Title>
          Talk to us about <br />
          your <Highlight>real kitchens</Highlight>
        </Title>

        <Subtitle>
          Connect with Hygnn through the platforms your team already uses.
        </Subtitle>

        <IconsRowWrapper>
          <IconsRowShell>
            <CarouselTrack>
              {doubledIcons.map((icon, idx) => (
                <IconLink
                  key={idx}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppLogo src={icon.src} alt={icon.alt} />
                </IconLink>
              ))}
            </CarouselTrack>

            <LeftFade />
            <RightFade />
          </IconsRowShell>
        </IconsRowWrapper>

        <Caption>
          Hygnn integrates with your favourite communication channels.
        </Caption>

        <CTAButton to="/contact">Contact Hygnn</CTAButton>
      </Container>
    </Section>
  );
};

export default ContactSection;
