// src/components/ReviewsSection.js
import styled, { keyframes } from "styled-components";
import Section from "./layout/Section";
import Container from "./layout/Container";

/* ---------------- Header ---------------- */

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.6rem, 3.6vw, 3.2rem);
  font-family: "KentledgeMedium";
  line-height: 1.1;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #006bff, #5b1bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 0.8rem;
  font-size: 1.05rem;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5e1" : "#4b5563"};
`;

/* ---------------- Marquee Animations ---------------- */

const marqueeLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueeRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

/* ---------------- Reviews ---------------- */

const ReviewsWrapper = styled.div`
  margin-top: 3.5rem;
  position: relative;
`;

const ReviewsShell = styled.div`
  position: relative;
  overflow: hidden;
  padding: 12px 0;
`;

const ReviewsShellNarrow = styled(ReviewsShell)`
  width: 78%;
  margin: 0 auto;
`;

/* ---------------- Edge Fade ---------------- */

const EdgeFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  pointer-events: none;
  z-index: 2;
`;

const LeftFade = styled(EdgeFade)`
  left: 0;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(to right, #000, transparent)"
      : "linear-gradient(to right, #fff, transparent)"};
`;

const RightFade = styled(EdgeFade)`
  right: 0;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(to left, #000, transparent)"
      : "linear-gradient(to left, #fff, transparent)"};
`;

/* ---------------- Tracks ---------------- */

const ReviewsTrackLeft = styled.div`
  display: inline-flex;
  gap: 20px;
  animation: ${marqueeLeft} 42s linear infinite;
`;

const ReviewsTrackRight = styled.div`
  display: inline-flex;
  gap: 20px;
  animation: ${marqueeRight} 42s linear infinite;
`;

/* ---------------- Cards ---------------- */

const ReviewCard = styled.div`
  flex: 0 0 320px;
  padding: 22px;
  border-radius: 20px;
  text-align: left;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(15, 23, 42, 0.35)"
      : "linear-gradient(145deg, #f9fafb, #e5e7eb)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(148, 163, 184, 0.35)"
        : "rgba(148, 163, 184, 0.6)"};
`;

const ReviewText = styled.p`
  margin: 0 0 14px;
  font-size: 0.95rem;
  line-height: 1.55;
  font-family: "KentledgeMedium";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#e5e7eb" : "#374151"};
`;

const Reviewer = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-family: "KentledgeLight";
`;

const Role = styled.p`
  margin: 2px 0 0;
  font-size: 0.8rem;
  opacity: 0.7;
  font-family: "KentledgeLight";
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

const ReviewsSection = () => {
  return (
    <Section id="reviews">
      <Container>
        <Header>
          <Title>
            Trusted by <Highlight>real partners</Highlight>
          </Title>
          <Subtitle>
            See what businesses say about working with Hygnn.
          </Subtitle>
        </Header>

        <ReviewsWrapper>
          <ReviewsShell>
            <ReviewsTrackLeft>
              {doubledReviews.map((review, idx) => (
                <ReviewCard key={`top-${idx}`}>
                  <ReviewText>“{review.text}”</ReviewText>
                  <Reviewer>{review.name}</Reviewer>
                  <Role>{review.role}</Role>
                </ReviewCard>
              ))}
            </ReviewsTrackLeft>
            <LeftFade />
            <RightFade />
          </ReviewsShell>

          <ReviewsShellNarrow>
            <ReviewsTrackRight>
              {doubledReviews.map((review, idx) => (
                <ReviewCard key={`bottom-${idx}`}>
                  <ReviewText>“{review.text}”</ReviewText>
                  <Reviewer>{review.name}</Reviewer>
                  <Role>{review.role}</Role>
                </ReviewCard>
              ))}
            </ReviewsTrackRight>
            <LeftFade />
            <RightFade />
          </ReviewsShellNarrow>
        </ReviewsWrapper>
      </Container>
    </Section>
  );
};

export default ReviewsSection;
