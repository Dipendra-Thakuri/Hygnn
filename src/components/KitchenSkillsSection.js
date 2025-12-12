// src/components/KitchenSkillsSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text};

  /* Plain background at top & bottom */
  padding: 140px 0 160px;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  z-index: 0;

  /* Centered radial glow that does NOT hit the edges */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: min(700px, 100%);
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 177, 213, 0.25),
      rgba(98, 28, 208, 0.15) 40%,
      transparent 90%
    );
    filter: blur(16px);
    opacity: ${({ theme }) =>
      theme.background === "#ffffff" ? 0.9 : 1};
    z-index: -1;
    pointer-events: none;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 1.15rem;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

const OptionsGrid = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  border-radius: 18px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: 0.25s ease;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "rgba(15, 23, 42, 0.03)"
      : "rgba(255, 255, 255, 0.06)"};

  border: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "1px solid rgba(148, 163, 184, 0.4)"
      : "1px solid rgba(255, 255, 255, 0.12)"};

  &:hover {
    background: ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(15, 23, 42, 0.06)"
        : "rgba(255, 255, 255, 0.12)"};
    transform: translateY(-2px);
  }
`;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
`;

const Icon = styled.span`
  font-size: 1.3rem;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #94a3b8;
  border-radius: 50%;
`;

const CTAButton = styled.button`
  margin-top: 50px;
  padding: 14px 32px;
  font-size: 1.2rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  background: linear-gradient(180deg, #ffffff, #dfe3e8);
  color: #000;

  transition: 0.25s ease;

  &:hover {
    background: white;
    transform: translateY(-2px);
  }
`;

const KitchenSkillsSection = () => {
  return (
    <Section>
      <Container>
        <Title>
          What would you like to <Highlight>improve</Highlight> <br />
          in your Kitchen?
        </Title>

        <Subtitle>
          Pick hygiene areas you want to strengthen across your operations:
        </Subtitle>

        <OptionsGrid>
          <OptionCard>
            <OptionLabel>
              <Icon>🧽</Icon> Cleaning Consistency
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon>📋</Icon> SOP Compliance
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon>⚠️</Icon> Risk Identification
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon>📊</Icon> Audit Readiness
            </OptionLabel>
            <Circle />
          </OptionCard>
        </OptionsGrid>

        <CTAButton>Let’s improve</CTAButton>
      </Container>
    </Section>
  );
};

export default KitchenSkillsSection;
