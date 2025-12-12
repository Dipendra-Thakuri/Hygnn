// src/components/ProblemsSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PlaceholderImg = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50px;
  background: linear-gradient(120deg, #ef4444, #f97316);
  opacity: 0.8;

  /* Box shadow only in dark mode */
  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "none"
      : `
        0 0 60px rgba(0, 175, 255, 0.25),
        0 0 100px rgba(0, 175, 255, 0.18),
        0 0 140px rgba(0, 175, 255, 0.12)
      `};
`;

const LeftCol = styled.div`
  max-width: 40%;
`;

const Title = styled.h2`
  margin: 0 0 14px 0;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.15;
  font-family: "KentledgeBold";

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.55;

  /* Better readability in light mode */
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#90959fff"};
`;

const ProblemsSection = () => {
  return (
    <Section id="problems">
      <Container>
        <LeftCol>
          <Title>Facing problems with Hygiene?</Title>

          <Subtitle>
            Track your level of hygiene with real insights from Hygnn — see
            what’s going wrong, understand risks, and improve your kitchen’s
            performance effortlessly.
          </Subtitle>
        </LeftCol>

        <PlaceholderImg src="/BadReport.png" />
      </Container>
    </Section>
  );
};

export default ProblemsSection;
