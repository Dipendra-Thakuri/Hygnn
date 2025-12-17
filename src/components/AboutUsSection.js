// src/components/AboutUsSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: clamp(60px, 10vw, 80px) 0;
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
    gap: 0.5rem;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    order: 2;
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

const TextCol = styled.div`
  max-width: 520px;

  @media (max-width: 900px) {
    max-width: none;
    order: 1;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.75rem 0;
  font-size: clamp(2rem, 4.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.05rem);
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#90959f" : "#4b5563"};
`;

const AboutUsSection = () => {
  return (
    <Section id="about-us">
      <Container>
        <ImageWrapper>
          <PlaceholderImg
            src="/BadReport.png"
            alt="Hygiene performance report illustration"
          />
        </ImageWrapper>

        <TextCol>
          <Title>We are Your Hygiene Partner</Title>
          <Subtitle>
            We bring everything your business needs to stay truly hygienic under
            one roof. From trusted hygiene products to expert on-site services
            and powerful digital tools, Hygnn delivers a complete ecosystem
            designed to elevate cleanliness, reduce risks, and support seamless
            operations.
          </Subtitle>
        </TextCol>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
