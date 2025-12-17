// src/components/HeroSection.js
import styled from "styled-components";

const HeroMain = styled.section.attrs(() => ({
  id: "hero",
}))`
  background: ${({ theme }) => theme.background};
  padding: clamp(120px, 12vh, 140px) 1.25rem
    clamp(100px, 12vh, 140px);
  display: flex;
  justify-content: center;
  text-align: center;
`;

const HeroContainer = styled.div`
  max-width: 1100px;
  width: 100%;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2.2rem, 5.5vw, 4.5rem);
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

const HeroText = styled.p`
  margin-top: 0.75rem;
  font-size: clamp(1.05rem, 2.5vw, 1.5rem);
  font-weight: 600;
  font-family: "KentledgeBold";
  color: ${({ theme }) => theme.text};
`;

const HighlightText = styled.span`
  color: #00c2a0;
`;

/* CTA Button */
const HeroButton = styled.button`
  margin-top: 1.5rem;
  padding: clamp(14px, 2vw, 16px)
    clamp(28px, 6vw, 42px);
  font-size: clamp(1rem, 2.5vw, 1.4rem);
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

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `
        0 0 40px rgba(0, 175, 255, 0.25),
        0 0 80px rgba(0, 175, 255, 0.18)
      `
      : "none"};

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) =>
        theme.mode === "dark"
          ? `
            0 0 55px rgba(0, 175, 255, 0.37),
            0 0 110px rgba(0, 175, 255, 0.29)
          `
          : "none"};
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <HeroMain>
      <HeroContainer>
        <HeroTitle>
          Elevate your <GradientText>hygiene</GradientText> standards
        </HeroTitle>

        <HeroText>
          Get a <HighlightText>Custom Solution</HighlightText> for your Kitchen
        </HeroText>

        <HeroButton>Know How</HeroButton>
      </HeroContainer>
    </HeroMain>
  );
};

export default HeroSection;
