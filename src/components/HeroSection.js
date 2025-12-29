import styled from "styled-components";

/* ---------------- Hero Wrapper ---------------- */

const HeroWrapper = styled.section`
  width: 100%;
  padding: clamp(96px, 14vh, 140px) 0 clamp(72px, 10vh, 110px);
`;

/* ---------------- Hero Content ---------------- */

const HeroContent = styled.div`
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

/* ---------------- Typography ---------------- */

const HeroTitle = styled.h1`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2.5rem, 4.2vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
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
  margin: 0;
  font-size: clamp(1.1rem, 1.4vw, 1.4rem);
  font-family: "KentledgeLight";
  color: ${({ theme }) => theme.text};
  max-width: 640px;
`;

const HighlightText = styled.span`
  color: #00c2a0;
`;

const HeroButton = styled.button`
  margin-top: 1.8rem;
  padding: 12px 36px 10px;
  font-size: 1.05rem;
  border-radius: 999px;
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

  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

/* ---------------- Component ---------------- */

const HeroSection = () => {
  return (
    <section id="hero">
      <HeroWrapper>
        
          <HeroContent>
            <HeroTitle>
              Elevate Your <GradientText>Hygiene</GradientText> Standards
            </HeroTitle>
            <HeroTitle>Protect Your Brand</HeroTitle>

            <HeroText>
              <HighlightText>
                Connect to redefine what’s possible for hygiene in your business.
              </HighlightText>
            </HeroText>

            <HeroButton>Become a Partner</HeroButton>
          </HeroContent>
        
      </HeroWrapper>
    </section>
  );
};

export default HeroSection;
