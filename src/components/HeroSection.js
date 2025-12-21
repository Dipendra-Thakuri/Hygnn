// src/components/HeroSection.js
import styled from "styled-components";

const HeroMain = styled.section.attrs(() => ({
  id: "hero",
}))`
  background: ${({ theme }) => theme.background};

  /* FULL SCREEN UNTIL LARGE LAPTOPS */
  min-height: 400px; /* header offset */

  /* STOP GROWING AFTER LARGE SCREENS */
  max-height: 820px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0 0.25rem;
`;

const HeroContainer = styled.div`
  max-width: 100%;
  width: 100%;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2rem, 4.3vw, 4rem);
  font-weight: 900;
  line-height: 1.2;
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
  margin-top: 0;
  font-size: clamp(1.05rem, 1.5vw, 1.5rem);
  font-family: "KentledgeLight";
  color: ${({ theme }) => theme.text};
`;

const HighlightText = styled.span`
  color: #00c2a0;
`;

/* CTA Button */
const HeroButton = styled.button`
  margin-top: 1rem;
  padding: clamp(10px, 1.2vw, 12px) 1.7rem clamp(10px, 1.1vw, 12px);
  font-size: clamp(1.1rem, 1.5vw, 2.2rem);
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-family: "KentledgeMedium";

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

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
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
          Elevate Your <GradientText> Hygiene </GradientText> Standards
        </HeroTitle>
        <HeroTitle> Protect Your Brand </HeroTitle>

        <HeroText>
          <HighlightText>Connect to redefine what's possible for Hygiene in your business.</HighlightText>
        </HeroText>

        <HeroButton>Become a Partner</HeroButton>
      </HeroContainer>
    </HeroMain>
  );
};

export default HeroSection;
