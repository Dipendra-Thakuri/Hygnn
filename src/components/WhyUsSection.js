import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import Container from "./layout/Container";
import {
  LuHandshake,
  LuTrendingUp,
  LuLayers,
  LuZap,
  LuRepeat,
  LuShieldCheck,
} from "react-icons/lu";

/* ---------------- Animations ---------------- */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headerVariants = {
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ---------------- Header ---------------- */

const HeaderRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 3.2rem;
`;

const HeaderWrap = styled.div`
  max-width: 720px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a5b4fc;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.4rem, 3.4vw, 3.2rem);
  margin: 0;
  font-family: "KentledgeMedium";
`;

const SectionSubtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  max-width: 60ch;
  line-height: 1.6;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#9ca3af" : "#4b5563"};
`;

/* ---------------- Grid ---------------- */

const ReasonsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
`;

/* ---------------- Card ---------------- */

const ReasonCard = styled(motion.div)`
  padding: 22px 22px 26px;
  border-radius: 20px;

  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.14)"
        : "rgba(148, 163, 184, 0.4)"};

  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ReasonIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #6366f1;
`;

const ReasonTitle = styled.h3`
  font-size: 1.15rem;
  margin: 0 0 8px 0;
  font-family: "KentledgeMedium";
`;

const ReasonText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#e5e7eb" : "#4b5563"};
`;

/* ---------------- Component ---------------- */

const WhyUsSection = () => {
  return (
    <Section id="why-us">
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <HeaderRow variants={headerVariants}>
            <HeaderWrap>
              <Tag>Why Hygnn</Tag>
              <SectionTitle>Built for busy kitchen operators</SectionTitle>
              <SectionSubtitle>
                We combine on-ground hygiene services with simple digital tools.
              </SectionSubtitle>
            </HeaderWrap>
          </HeaderRow>

          <ReasonsGrid variants={gridVariants}>
            {[
              [LuHandshake, "Partner, not just vendor"],
              [LuTrendingUp, "Actionable hygiene insights"],
              [LuLayers, "End-to-end support"],
              [LuZap, "Simple tools, fast adoption"],
              [LuRepeat, "Consistency across outlets"],
              [LuShieldCheck, "Audit-ready, always"],
            ].map(([Icon, title], i) => (
              <ReasonCard key={i} variants={cardVariants}>
                <ReasonIcon>
                  <Icon />
                </ReasonIcon>
                <ReasonTitle>{title}</ReasonTitle>
                <ReasonText>
                  Practical systems designed for real kitchens.
                </ReasonText>
              </ReasonCard>
            ))}
          </ReasonsGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
