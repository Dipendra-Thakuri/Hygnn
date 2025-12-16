// src/components/WhyUsSection.js
import React from "react";
import styled from "styled-components";

const SectionMain = styled.section.attrs(() => ({
  id: "why-us",
}))`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
`;

const SectionContainer = styled.div`
  width: 90%;
  max-width: 1100px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a5b4fc;
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem;
  margin: 0;
  font-family: "KentledgeBold";
`;

const SectionSubtitle = styled.p`
  margin: 0;
  font-size: 1.02rem;
  max-width: 580px;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#9ca3af"};
`;

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ReasonCard = styled.div`
  padding: 18px 18px 20px 18px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: ${({ theme }) => theme.cardBackground};
`;

const ReasonIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const ReasonTitle = styled.h3`
  font-size: 1.15rem;
  margin: 0 0 6px 0;
  font-family: "KentledgeBold";
`;

const ReasonText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#e5e7eb"};
`;

const WhyUsSection = () => {
  return (
    <SectionMain>
      <SectionContainer>
        <HeaderRow>
          <Tag>Why Hygnn</Tag>
          <SectionTitle>Built for busy kitchen operators</SectionTitle>
          <SectionSubtitle>
            We combine on-ground hygiene services with simple digital tools, so
            your teams can focus on guests while also keeping the hygiene under control.
          </SectionSubtitle>
        </HeaderRow>

        <ReasonsGrid>
          <ReasonCard>
            <ReasonIcon>🤝</ReasonIcon>
            <ReasonTitle>Partner, not just vendor</ReasonTitle>
            <ReasonText>
              We work with your operations team to define standards, SOPs, and
              routines that actually fit your kitchens.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon>📊</ReasonIcon>
            <ReasonTitle>Actionable hygiene insights</ReasonTitle>
            <ReasonText>
              Dashboards and reports that highlight risk areas, trends, and
              sites that need attention — not just raw checklists.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon>🧽</ReasonIcon>
            <ReasonTitle>End-to-end support</ReasonTitle>
            <ReasonText>
              From audits and deep cleans to daily checklists and tickets, we
              give you a single place to run hygiene.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon>⚡</ReasonIcon>
            <ReasonTitle>Simple tools, fast adoption</ReasonTitle>
            <ReasonText>
              Designed for quick adoption, Hygnn’s intuitive workflows and clear visuals enable teams to manage hygiene tasks with minimal training.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon>✅</ReasonIcon>
            <ReasonTitle>Consistency across outlets</ReasonTitle>
            <ReasonText>
              Standardize hygiene routines so every location matches your brand
              promise — not just the flagship store.
            </ReasonText>
          </ReasonCard>

          <ReasonCard>
            <ReasonIcon>🔒</ReasonIcon>
            <ReasonTitle>Audit-ready, always</ReasonTitle>
            <ReasonText>
              Digital records, time-stamped checks, and photo evidence make it
              easy to face inspections with confidence.
            </ReasonText>
          </ReasonCard>
        </ReasonsGrid>
      </SectionContainer>
    </SectionMain>
  );
};

export default WhyUsSection;
