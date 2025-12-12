// src/components/HeroSection.js
import styled from "styled-components";

const HeroMain = styled.div.attrs(() => ({
  id: "hero",
}))`
  background: ${({ theme }) => theme.background};
  padding: 120px 0 90px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.05;
  font-family: "KentledgeBold";
`;

const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #0083ff,
    #005fff,
    #621cd0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroText = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "KentledgeBold";
`;

const HighlightText = styled.span`
  color: #00c2a0;
`;

/* 🔘 BOX SHADOW only in DARK MODE */
const HeroButton = styled.button`
  margin-top: 14px;
  padding: 16px 42px;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #0083ff,
    #005fff,
    #621cd0
  );
  color: white;
  transition: 0.3s ease;

  /* DARK MODE shadow, NONE in LIGHT */
  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "none"
      : `
        0 0 40px rgba(0, 175, 255, 0.25),
        0 0 80px rgba(0, 175, 255, 0.18),
        0 0 120px rgba(0, 175, 255, 0.12)
      `};

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.background === "#ffffff"
        ? "none"
        : `
          0 0 55px rgba(0, 175, 255, 0.37),
          0 0 110px rgba(0, 175, 255, 0.29),
          0 0 160px rgba(0, 175, 255, 0.23)
        `};
    transform: scale(1.05);
  }
`;

const HeroSection = () => {
  return (
    <HeroMain>
      <HeroTitle>
        Elevate your <GradientText>hygiene</GradientText> standards
      </HeroTitle>

      <HeroText>
        Get a <HighlightText>Custom Solution</HighlightText> for your Kitchen
      </HeroText>

      <HeroButton>Know How</HeroButton>
    </HeroMain>
  );
};

export default HeroSection;
