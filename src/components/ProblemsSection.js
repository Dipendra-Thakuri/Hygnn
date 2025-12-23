// src/components/ProblemsSection.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Section from "./layout/Section";
import Container from "./layout/Container";

/* ---------------- Layout ---------------- */

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2.5rem, 6vw, 4rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ---------------- Text ---------------- */

const TextCol = styled.div`
  max-width: 420px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  transition: opacity 0.7s ease, transform 0.7s ease;

  @media (max-width: 900px) {
    max-width: none;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 4.5vw, 2.6rem);
  line-height: 1.15;
  font-family: "KentledgeMedium";
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.05rem);
  line-height: 1.6;
  max-width: 60ch;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#90959f" : "#4b5563"};
  font-family: "KentledgeLight";

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

/* ---------------- Image ---------------- */

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.9s ease, transform 0.9s ease;
`;

const Image = styled.img`
  width: clamp(220px, 36vw, 300px);
  border-radius: 40px;
  object-fit: cover;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `
        0 0 60px rgba(0, 175, 255, 0.25),
        0 0 100px rgba(0, 175, 255, 0.18)
      `
      : `0 10px 25px rgba(0, 0, 0, 0.12)`};
`;

/* ---------------- Component ---------------- */

const ProblemsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="problems">
      <Container ref={sectionRef}>
        <ContentGrid>
          <TextCol $visible={visible}>
            <Title>The Hidden Friction in Traditional Hygiene.</Title>
            <Subtitle>
              Most F&B operations treat hygiene as a fragmented cost center,
              juggling siloed chemical suppliers, manual audit logs, and
              inconsistent labor. This isn’t just inefficient, it’s a structural
              risk to your brand.
            </Subtitle>
          </TextCol>

          <ImageWrapper $visible={visible}>
            <Image
              src="/BadReport.png"
              alt="Kitchen hygiene report showing poor performance"
            />
          </ImageWrapper>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default ProblemsSection;
