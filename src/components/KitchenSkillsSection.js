import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import Container from "./layout/Container";
import {
  LuSprayCan,
  LuClipboardCheck,
  LuCpu,
  LuGraduationCap,
  LuShieldCheck,
  LuGitBranch,
} from "react-icons/lu";

/* ================= Animations ================= */

const sectionVariants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ================= Content ================= */

const Content = styled(motion.div)`
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: min(720px, 90%);
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 177, 213, 0.25),
      rgba(98, 28, 208, 0.15) 40%,
      transparent 90%
    );
    filter: blur(22px);
    opacity: ${({ theme }) => (theme.mode === "dark" ? 1 : 0)};
    z-index: 0;
    pointer-events: none;
  }
`;

/* ================= Typography ================= */

const TextWrap = styled(motion.div)`
  max-width: 720px;
  margin-inline: auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.4rem, 3.6vw, 3.2rem);
  font-family: "KentledgeMedium";
  line-height: 1.15;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 0.9rem;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5e1" : "#4b5563"};
`;

/* ================= Grid ================= */

const OptionsGrid = styled(motion.div)`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
`;

/* ================= Cards ================= */

const OptionCard = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(6px);

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(15, 23, 42, 0.03)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.14)"
        : "rgba(148, 163, 184, 0.45)"};

  transition: transform 0.25s ease, background 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) =>
      theme.mode === "dark"
        ? `linear-gradient(
            135deg,
            #0b0d10 0%,
            #1a1f24 35%,
            #2e353d 50%,
            #1a1f24 65%,
            #0b0d10 100%
          )`
        : `linear-gradient(
            135deg,
            rgba(0, 177, 213, 0.12) 0%,
            rgba(0, 157, 255, 0.1) 35%,
            rgba(98, 28, 208, 0.08) 65%,
            rgba(0, 177, 213, 0.12) 100%
          )`};

    border-color: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.22)"
        : "rgba(148, 163, 184, 0.6)"};
  }
`;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  color: #00b1d5;
  transition: color 0.25s ease;

  ${OptionCard}:hover & {
    color: #00c2a0;
  }
`;

const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

const OptionMeta = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#94a3b8" : "#64748b"};
`;

const OptionTitle = styled.span`
  font-size: 1rem;
  font-family: "KentledgeLight";
  color: ${({ theme }) => theme.text};
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

/* ================= CTA ================= */

const CTAButton = styled(motion.button)`
  margin-top: 3.5rem;
  padding: 14px 34px;
  font-size: 1.05rem;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: "KentledgeMedium";

  background: #00c2a0;
  color: #ffffff;

  transition: transform 0.25s ease;

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
`;

/* ================= Component ================= */

const KitchenSkillsSection = () => {
  return (
    <Section>
      <Container>
        <Content
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <TextWrap variants={textVariants}>
            <Title>
              Which pillar is <Highlight>compromising</Highlight> your brand
              integrity?
            </Title>
            <Subtitle>
              Pick hygiene areas you want to strengthen across your operations:
            </Subtitle>
          </TextWrap>

          <OptionsGrid variants={gridVariants}>
            {[
              [LuSprayCan, "EXECUTION", "Routine Cleaning"],
              [LuClipboardCheck, "INFRASTRUCTURE", "Deep Cleaning"],
              [LuCpu, "INTELLIGENCE", "Automation"],
              [LuGraduationCap, "HUMAN CAPITAL", "Staff Training"],
              [LuShieldCheck, "GOVERNANCE", "Audit Compliance"],
              [LuGitBranch, "SCALABILITY", "Standardisation"],
            ].map(([IconComp, meta, title], i) => (
              <OptionCard
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <OptionLabel>
                  <Icon>
                    <IconComp />
                  </Icon>
                  <OptionText>
                    <OptionMeta>{meta}</OptionMeta>
                    <OptionTitle>{title}</OptionTitle>
                  </OptionText>
                </OptionLabel>
                <Circle />
              </OptionCard>
            ))}
          </OptionsGrid>

          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Let’s improve
          </CTAButton>
        </Content>
      </Container>
    </Section>
  );
};

export default KitchenSkillsSection;
