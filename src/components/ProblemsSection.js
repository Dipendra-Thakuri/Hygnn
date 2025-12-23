// src/components/ProblemsSection.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/* ---------------- Layout ---------------- */

const ProblemSection = styled.section`
  padding: clamp(80px, 12vw, 140px) 0;
  display: flex;
  justify-content: center;
`;

const ContentGrid = styled.div`
  max-width: 800px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(1rem, 2vw, 3rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ---------------- Text ---------------- */

const TextCol = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(24px)"};

  transition: opacity 0.7s ease, transform 0.7s ease;
`;

const Title = styled.h2`
  margin: 0 0 0.9rem;
  font-size: clamp(2.2rem, 3.2vw, 3rem);
  line-height: 1.12;
  font-family: "KentledgeMedium";
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  max-width: 60ch;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#90959f" : "#4b5563"};
  font-family: "KentledgeLight";

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

/* ---------------- Image ---------------- */

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(24px)"};

  transition: opacity 0.9s ease, transform 0.9s ease;
`;

const Image = styled.img`
  width: clamp(300px, 22vw, 380px);
  border-radius: 40px;
  object-fit: cover;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `
        0 0 60px rgba(0, 175, 255, 0.25),
        0 0 100px rgba(0, 175, 255, 0.18)
      `
      : `0 12px 30px rgba(0, 0, 0, 0.14)`};
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
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ProblemSection id="problems" ref={sectionRef}>
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
            src="/BadReport.pn"
            alt="Kitchen hygiene report showing poor performance"
          />
        </ImageWrapper>
      </ContentGrid>
    </ProblemSection>
  );
};

export default ProblemsSection;
