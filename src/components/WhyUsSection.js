// src/components/WhyUsSection.js
import React from "react";
import styled from "styled-components";
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

/* ---------------- Header ---------------- */

const HeaderRow = styled.div`
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

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
`;

/* ---------------- Card ---------------- */

const ReasonCard = styled.div`
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
    border-color: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.22)"
        : "rgba(148, 163, 184, 0.6)"};
  }
`;

const ReasonIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #6366f1;
  display: flex;
  align-items: center;
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
        <HeaderRow>
          <HeaderWrap>
          <Tag>Why Hygnn</Tag>
          <SectionTitle>Built for busy kitchen operators</SectionTitle>
          <SectionSubtitle>
            We combine on-ground hygiene services with simple digital tools, so
            your teams can focus on guests while also keeping hygiene under
            control.
          </SectionSubtitle>
          </HeaderWrap>
        </HeaderRow>

        <ReasonsGrid>
          <ReasonCard>
            <ReasonIcon><LuHandshake /></ReasonIcon>
            <ReasonTitle>Partner, not just vendor</ReasonTitle>
            <ReasonText>
              We work with your operations team to define standards, SOPs, and
              routines that actually fit your kitchens.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon><LuTrendingUp /></ReasonIcon>
            <ReasonTitle>Actionable hygiene insights</ReasonTitle>
            <ReasonText>
              Dashboards and reports that highlight risk areas, trends, and sites
              that need attention — not just raw checklists.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon><LuLayers /></ReasonIcon>
            <ReasonTitle>End-to-end support</ReasonTitle>
            <ReasonText>
              From audits and deep cleans to daily checklists and tickets, we give
              you a single place to run hygiene.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon><LuZap /></ReasonIcon>
            <ReasonTitle>Simple tools, fast adoption</ReasonTitle>
            <ReasonText>
              Designed for quick adoption, Hygnn’s intuitive workflows and clear
              visuals enable teams to manage hygiene tasks with minimal training.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon><LuRepeat /></ReasonIcon>
            <ReasonTitle>Consistency across outlets</ReasonTitle>
            <ReasonText>
              Standardize hygiene routines so every location matches your brand
              promise — not just the flagship store.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon><LuShieldCheck /></ReasonIcon>
            <ReasonTitle>Audit-ready, always</ReasonTitle>
            <ReasonText>
              Digital records, time-stamped checks, and photo evidence make it
              easy to face inspections with confidence.
            </ReasonText>
          </ReasonCard>
        </ReasonsGrid>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
