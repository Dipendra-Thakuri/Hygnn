// src/components/HygieneLevelSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Highlight = styled.span`
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

const Subtitle = styled.p`
  margin: 14px 0 40px 0;
  font-size: 1.1rem;

  /* Theme-aware subtitle color */
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardWrapper = styled.div`
  margin: 0 auto;
  max-width: 560px;
`;

const Card = styled.div`
  border-radius: 32px;
  padding: 26px 24px 28px 24px;

  /* Light vs Dark card background */
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(145deg, #f9fafb, #e5e7eb)"
      : "radial-gradient(circle at top, #111827, #020617)"};

  border: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "1px solid rgba(148, 163, 184, 0.6)"
      : "1px solid rgba(148, 163, 184, 0.4)"};

  /* Heavy shadow only in dark mode */
  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "none"
      : "0 24px 60px rgba(15, 23, 42, 0.85)"};
`;

const LevelStrip = styled.div`
  display: flex;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0f172a;
`;

const LevelItem = styled.div`
  flex: 1;
  padding: 8px 0;
  background: #e5e7eb;

  &:not(:last-child) {
    border-right: 1px solid rgba(148, 163, 184, 0.7);
  }
`;

const LevelItemActive = styled(LevelItem)`
  background: linear-gradient(90deg, #00b1d5, #009dff, #7b3cff, #e649ff);
  color: #ffffff;
`;

const LevelTitle = styled.p`
  margin: 0 0 4px 0;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#6b7280" : "#9ca3af"};
`;

const LevelValue = styled.p`
  margin: 0 0 20px 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#111827" : "#e5e7eb"};
`;

const RadarRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 18px;
  margin-top: 10px;
  font-size: 0.92rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 12px;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "rgba(249, 250, 251, 1)" // light panel on white
      : "rgba(15, 23, 42, 0.9)"}; // dark panel in dark

  border: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "1px solid rgba(148, 163, 184, 0.7)"
      : "1px solid rgba(55, 65, 81, 0.9)"};
`;

const StatLabel = styled.span`
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#111827" : "#e5e7eb"};
`;

const StatValue = styled.span`
  color: #38bdf8;
  font-weight: 600;
`;

const HygieneLevelSection = () => {
  return (
    <Section id="hygiene-level">
      <Container>
        <Title>
          Get your <Highlight>real</Highlight> Hygiene level
        </Title>

        <Subtitle>
          Get an on-site hygiene inspection by our specialists and receive a
          detailed score for every part of your kitchen.
        </Subtitle>

        <CardWrapper>
          <Card>
            <LevelStrip>
              <LevelItem>At risk</LevelItem>
              <LevelItem>Developing</LevelItem>
              <LevelItem>Controlled</LevelItem>
              <LevelItemActive>Pro Kitchen</LevelItemActive>
            </LevelStrip>

            <LevelTitle>Current sample score</LevelTitle>
            <LevelValue>Hygiene Level: Pro Kitchen (A)</LevelValue>

            <RadarRow>
              <Stat>
                <StatLabel>Surface hygiene</StatLabel>
                <StatValue>94%</StatValue>
              </Stat>
              <Stat>
                <StatLabel>Food handling</StatLabel>
                <StatValue>88%</StatValue>
              </Stat>
            </RadarRow>

            <RadarRow>
              <Stat>
                <StatLabel>Storage & labeling</StatLabel>
                <StatValue>91%</StatValue>
              </Stat>
              <Stat>
                <StatLabel>Staff practices</StatLabel>
                <StatValue>86%</StatValue>
              </Stat>
            </RadarRow>

            <RadarRow>
              <Stat>
                <StatLabel>Audit readiness</StatLabel>
                <StatValue>93%</StatValue>
              </Stat>
              <Stat>
                <StatLabel>Overall score</StatLabel>
                <StatValue>90%</StatValue>
              </Stat>
            </RadarRow>
          </Card>
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default HygieneLevelSection;
