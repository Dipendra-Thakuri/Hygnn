// src/components/HygieneLevelSection.js
import React from "react";
import styled from "styled-components";
import Section from "./layout/Section";
import Container from "./layout/Container";

/* ---------------- Content ---------------- */

const Content = styled.div`
  text-align: center;
`;

/* ---------------- Typography ---------------- */

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.6rem, 3.6vw, 3.2rem);
  font-family: "KentledgeMedium";
  line-height: 1.15;
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
  margin: 1rem auto 3rem;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 60ch;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5e1" : "#4b5563"};
`;

const TextWrap = styled.div`
  max-width: 680px;
  margin-inline: auto;
`;

/* ---------------- Card ---------------- */

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 660px;
  border-radius: 32px;
  padding: 30px 30px 34px;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "radial-gradient(circle at top, #111827, #020617)"
      : "linear-gradient(145deg, #f9fafb, #e5e7eb)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(148, 163, 184, 0.4)"
        : "rgba(148, 163, 184, 0.6)"};

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 26px 70px rgba(15, 23, 42, 0.85)"
      : "none"};
`;

/* ---------------- Level Strip ---------------- */

const LevelStrip = styled.div`
  display: flex;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 22px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0f172a;
`;

const LevelItem = styled.div`
  flex: 1;
  padding: 9px 0;
  background: #e5e7eb;

  &:not(:last-child) {
    border-right: 1px solid rgba(148, 163, 184, 0.7);
  }
`;

const LevelItemActive = styled(LevelItem)`
  background: linear-gradient(90deg, #00b1d5, #009dff, #7b3cff, #e649ff);
  color: #ffffff;
`;

/* ---------------- Score ---------------- */

const LevelTitle = styled.p`
  margin: 0 0 6px;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#9ca3af" : "#6b7280"};
`;

const LevelValue = styled.p`
  margin: 0 0 22px;
  font-size: 1.45rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#e5e7eb" : "#111827"};
`;

/* ---------------- Stats ---------------- */

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 14px;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(15, 23, 42, 0.9)"
      : "rgba(249, 250, 251, 1)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(55, 65, 81, 0.9)"
        : "rgba(148, 163, 184, 0.7)"};
`;

const StatLabel = styled.span`
  font-size: 0.92rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#e5e7eb" : "#111827"};
`;

const StatValue = styled.span`
  font-size: 0.92rem;
  font-weight: 600;
  color: #38bdf8;
`;

/* ---------------- Component ---------------- */

const HygieneLevelSection = () => {
  return (
    <Section id="hygiene-level">
      <Container size="wide">
        <Content>
          <TextWrap>
          <Title>
            Get your <Highlight>real</Highlight> Hygiene level
          </Title>

          <Subtitle>
            Get an on-site hygiene inspection by our specialists and receive a
            detailed score for every part of your kitchen.
          </Subtitle>
          </TextWrap>

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

              <StatsGrid>
                <Stat>
                  <StatLabel>Surface hygiene</StatLabel>
                  <StatValue>94%</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>Food handling</StatLabel>
                  <StatValue>88%</StatValue>
                </Stat>

                <Stat>
                  <StatLabel>Storage & labeling</StatLabel>
                  <StatValue>91%</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>Staff practices</StatLabel>
                  <StatValue>86%</StatValue>
                </Stat>

                <Stat>
                  <StatLabel>Audit readiness</StatLabel>
                  <StatValue>93%</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>Overall score</StatLabel>
                  <StatValue>90%</StatValue>
                </Stat>
              </StatsGrid>
            </Card>
          </CardWrapper>
        </Content>
      </Container>
    </Section>
  );
};

export default HygieneLevelSection;
