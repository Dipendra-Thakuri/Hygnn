// src/components/ProblemsSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: clamp(60px, 10vw, 80px) 2rem clamp(60px, 10vw, 80px);
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
  width: 60%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0.5rem;
  }
`;

const TextCol = styled.div`
  max-width: 520px;

  @media (max-width: 900px) {
    max-width: none;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.75rem 0;
  font-size: clamp(2rem, 4.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  font-family: "KentledgeBold";
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.05rem);
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#90959f" : "#4b5563"};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PlaceholderImg = styled.img`
  width: clamp(220px, 40vw, 320px);
  aspect-ratio: 1 / 1;
  border-radius: 40px;
  object-fit: cover;
  opacity: 0.9;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `
        0 0 60px rgba(0, 175, 255, 0.25),
        0 0 100px rgba(0, 175, 255, 0.18)
      `
      : "none"};
`;

const ProblemsSection = () => {
  return (
    <Section id="problems">
      <Container>
        <TextCol>
          <Title>Is Hygiene Becoming a Challenge?</Title>

          <Subtitle>
            Most Hygiene risks hide in routine we help you bring Consistency,
             Control, Confidence back to your environment.
             Reducing Uncertainity and Supporting Cleaner, Safer operations at scale.
          </Subtitle>
        </TextCol>

        <ImageWrapper>
          <PlaceholderImg
            src="/BadReport.png"
            alt="Kitchen hygiene report showing poor performance"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default ProblemsSection;
