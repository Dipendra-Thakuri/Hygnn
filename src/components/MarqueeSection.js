import React from "react";
import styled, { keyframes } from "styled-components";

/* ---------------- Animation ---------------- */

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

/* ---------------- Section ---------------- */

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: clamp(8px, 3vw, 20px) 0;
  background: ${({ theme }) => theme.background};
`;

/* ---------------- Banner ---------------- */

const Banner = styled.div`
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
  border-radius: 10px;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #0083ff,
    #005fff,
    #621cd0
  );
`;

/* ---------------- Marquee ---------------- */

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 28s linear infinite;
`;

const Inner = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const Text = styled.span`
  white-space: nowrap;
  padding: 0.5rem;
  font-size: clamp(0.7rem, 1.5vw, 1.5rem);
  font-family: "KentledgeBold";

  color: #ffffff;
`;

/* ---------------- Component ---------------- */

const MarqueeSection = () => {
  const message =
    "If your hygiene depends on a checklist and a prayer, your brand is vulnerable.";

  return (
    <Section aria-label="Brand message banner">
      <Banner>
        <Track>
          <Inner>
            <Text>{message}</Text>
            <Text>{message}</Text>
          </Inner>
        </Track>
      </Banner>
    </Section>
  );
};

export default MarqueeSection;
