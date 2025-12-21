// src/components/ContactSection.js
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/* ---------------- Section ---------------- */

const Section = styled.section`
  position: relative;
  padding: clamp(72px, 10vw, 120px) 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 1100px;
  z-index: 1;
`;

/* ---------------- Header ---------------- */

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 14px;
  font-size: 1.1rem;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

/* ---------------- Reviews Carousel ---------------- */

const marquee1 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marquee2 = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const ReviewsWrapper = styled.div`
  margin-top: 44px;
  position: relative;
`;

const ReviewsShell1 = styled.div`
  overflow: hidden;
  padding: 10px 0;
`;

const ReviewsShell2 = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10px 0;
  width: 80%;
  margin: 0 auto;
`;

const EdgeFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90px;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 640px) {
    width: 40px;
  }
`;

const LeftFade = styled(EdgeFade)`
  left: 0;
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"
      : "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"};
`;

const RightFade = styled(EdgeFade)`
  right: 0;
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))"
      : "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"};
`;

const LeftFadeSmall = styled(LeftFade)`
  width: 50px;
`;

const RightFadeSmall = styled(RightFade)`
  width: 50px;
`;

const ReviewsTrack1 = styled.div`
  display: inline-flex;
  gap: 17px;
  animation: ${marquee1} 40s linear infinite;
`;

const ReviewsTrack2 = styled.div`
  display: inline-flex;
  gap: 17px;
  animation: ${marquee2} 40s linear infinite;
`;

const ReviewCard = styled.div`
  flex: 0 0 300px;
  padding: 20px;
  border-radius: 18px;
  text-align: left;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(145deg, #f9fafb, #e5e7eb)"
      : "rgba(15, 23, 42, 0.3)"};

  border: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148, 163, 184, 0.6)"
        : "rgba(148, 163, 184, 0.35)"};
`;

const ReviewText = styled.p`
  margin: 0 0 14px;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#374151" : "#e5e7eb"};
`;

const Reviewer = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Role = styled.p`
  margin: 2px 0 0;
  font-size: 0.8rem;
  opacity: 0.7;
`;

/* ---------------- CTA ---------------- */

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 14px 34px;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;

  background: #621cd0;
  color: #ffffff;

  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(
      135deg,
      #3d0f8a 0%,
      #5320b5 30%,
      #621cd0 50%,
      #5320b5 70%,
      #3d0f8a 100%
    );
  }
`;

/* ---------------- Data ---------------- */

const REVIEWS = [
  {
    text:
      "Hygnn helped us standardize hygiene across all our outlets. The visibility and structure they bring is unmatched.",
    name: "Rohit Sharma",
    role: "Operations Head, QSR Chain",
  },
  {
    text:
      "Their audits and follow-ups actually work in real kitchens, not just on paper.",
    name: "Anjali Verma",
    role: "Founder, Cloud Kitchen Brand",
  },
  {
    text:
      "The biggest win for us was audit confidence. Everything is documented and accessible.",
    name: "Suresh Nair",
    role: "GM Operations, Hospitality Group",
  },
  {
    text:
      "Hygnn feels less like a vendor and more like a long-term hygiene partner.",
    name: "Kunal Mehta",
    role: "Restaurant Owner",
  },
  {
    text:
      "Clear SOPs, practical training, and real accountability. Exactly what our teams needed.",
    name: "Priya Iyer",
    role: "Food Safety Lead",
  },
];

const doubledReviews = [...REVIEWS, ...REVIEWS];

/* ---------------- Component ---------------- */

const ContactSection = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>
          Trusted by <Highlight>real kitchens</Highlight>
        </Title>

        <Subtitle>
          See what operators say about working with Hygnn.
        </Subtitle>

        <ReviewsWrapper>
          <ReviewsShell1>
            <ReviewsTrack1>
              {doubledReviews.map((review, idx) => (
                <ReviewCard key={idx}>
                  <ReviewText>“{review.text}”</ReviewText>
                  <Reviewer>{review.name}</Reviewer>
                  <Role>{review.role}</Role>
                </ReviewCard>
              ))}
            </ReviewsTrack1>

            <LeftFade />
            <RightFade />
          </ReviewsShell1>

          <ReviewsShell2>
            <ReviewsTrack2>
              {doubledReviews.map((review, idx) => (
                <ReviewCard key={idx}>
                  <ReviewText>“{review.text}”</ReviewText>
                  <Reviewer>{review.name}</Reviewer>
                  <Role>{review.role}</Role>
                </ReviewCard>
              ))}
            </ReviewsTrack2>

            <LeftFadeSmall />
            <RightFadeSmall />
          </ReviewsShell2>
        </ReviewsWrapper>

        <CTAButton to="/contact">Talk to Hygnn</CTAButton>
      </Container>
    </Section>
  );
};

export default ContactSection;
