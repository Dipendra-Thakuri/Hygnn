import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/* ---------------- Section ---------------- */

const Section = styled.section`
  padding: clamp(60px, 10vw, 80px) 2rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

/* ---------------- Container ---------------- */

const Container = styled.div`
  width: 65%;
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto auto; /* content-driven */
  align-items: center;
  gap: 1.4rem; /* tighter spacing */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

/* ---------------- Text ---------------- */

const TextCol = styled.div`
  max-width: 520px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  transition: opacity 0.7s ease, transform 0.7s ease;

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

/* ---------------- Image ---------------- */

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  transform: ${({ $visible }) =>
    $visible ? "translate(-12px, 0)" : "translate(-12px, 20px)"};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transition: opacity 0.9s ease, transform 0.9s ease;

  @media (max-width: 900px) {
    transform: ${({ $visible }) =>
      $visible ? "translateY(0)" : "translateY(20px)"};
  }
`;

const PlaceholderImg = styled.img`
  width: clamp(220px, 36vw, 300px);
  border-radius: 40px;
  object-fit: cover;
  opacity: 0.95;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `
        0 0 60px rgba(0, 175, 255, 0.25),
        0 0 100px rgba(0, 175, 255, 0.18)
      `
      : `
        0 10px 25px rgba(0, 0, 0, 0.12)
      `};
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="problems" ref={sectionRef}>
      <Container>
        <TextCol $visible={visible}>
          <Title>Is Hygiene Becoming a Challenge?</Title>
          <Subtitle>
            Most hygiene risks hide in routine. We help you bring consistency,
            control, and confidence back to your environment — reducing
            uncertainty and supporting cleaner, safer operations at scale.
          </Subtitle>
        </TextCol>

        <ImageWrapper $visible={visible}>
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
