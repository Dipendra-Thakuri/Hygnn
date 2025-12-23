import styled from "styled-components";

/* ---------------- Hero Wrapper ---------------- */

const HeroWrapper = styled.div`
  min-height: calc(100svh - var(--header-height, 0px));
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ---------------- Hero Content ---------------- */

const HeroContent = styled.div`
  text-align: center;
  max-width: 100svw;
  margin: 0 auto;
`;

/* ---------------- Typography ---------------- */

const HeroTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 4.5svw;
  font-weight: 900;
  line-height: 1.15;
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
  margin-top: 1rem;
  font-size: 1.6vw;
  font-family: "KentledgeLight";
  color: ${({ theme }) => theme.text};
  margin-left: auto;
  margin-right: auto;
`;

const HighlightText = styled.span`
  color: #00c2a0;
`;

const HeroButton = styled.button`
  margin-top: 1.6rem;
  padding: 12px 36px;
  font-size: 1.5svw;
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
    <div id="hero">
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
    </div>
  );
};

export default HeroSection;
