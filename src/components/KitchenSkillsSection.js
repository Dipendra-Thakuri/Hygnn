// src/components/KitchenSkillsSection.js
import React from "react";
import styled from "styled-components";
import {
  LuSprayCan,
  LuClipboardCheck,
  LuCpu,
  LuGraduationCap,
  LuShieldCheck,
  LuGitBranch,
} from "react-icons/lu";

const Section = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text};

  padding: clamp(90px, 12vw, 140px) 0
    clamp(110px, 14vw, 160px);
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  z-index: 0;

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
    filter: blur(18px);
    opacity: ${({ theme }) => (theme.mode === "dark" ? 1 : 0.85)};
    z-index: -1;
    pointer-events: none;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.1rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 0.75rem;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5e1" : "#4b5563"};
`;

const OptionsGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  border-radius: 18px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(15, 23, 42, 0.03)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.12)"
        : "rgba(148, 163, 184, 0.4)"};

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);

      background: ${({ theme }) =>
        theme.mode === "dark"
          ? `linear-gradient(
              135deg,
              #0b0d10 0%,
              #1a1f24 30%,
              #2e353d 50%,
              #1a1f24 70%,
              #0b0d10 100%
            )`
          : `linear-gradient(
            135deg,
            rgba(0, 177, 213, 0.12) 0%,
            rgba(0, 157, 255, 0.10) 35%,
            rgba(98, 28, 208, 0.08) 65%,
            rgba(0, 177, 213, 0.12) 100%
          )`};

      border-color: ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.22)"
          : "rgba(148, 163, 184, 0.6)"};
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const OptionLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
`;

const Icon = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: #00b1d5;
  transition: color 0.25s ease;

  ${OptionCard}:hover & {
    color: #00c2a0;
  }
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #94a3b8;
  transition: border-color 0.25s ease;

  ${OptionCard}:hover & {
    border-color: #00c2a0;
  }
`;

const CTAButton = styled.button`
  margin-top: 3rem;
  padding: 14px 32px;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  background: #00c2a0;
  color: #ffffff;

  transition: transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      background: linear-gradient(
        135deg,
        #007f6a 0%,
        #00a88c 30%,
        #00c2a0 50%,
        #00a88c 70%,
        #007f6a 100%
      );
    }
  }
`;

const KitchenSkillsSection = () => {
  return (
    <Section>
      <Container>
        <Title>
          What would you like to <Highlight>improve</Highlight>
          <br />
          in your Kitchen?
        </Title>

        <Subtitle>
          Pick hygiene areas you want to strengthen across your operations:
        </Subtitle>

        <OptionsGrid>
          <OptionCard>
            <OptionLabel>
              <Icon><LuSprayCan /></Icon>
              Routine Cleaning
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon><LuClipboardCheck /></Icon>
              Periodical Deep Cleaning
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon><LuCpu /></Icon>
              Automation in Kitchen
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon><LuGraduationCap /></Icon>
              Trainings
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon><LuShieldCheck /></Icon>
              Compliance
            </OptionLabel>
            <Circle />
          </OptionCard>

          <OptionCard>
            <OptionLabel>
              <Icon><LuGitBranch /></Icon>
              Process Optimization
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
