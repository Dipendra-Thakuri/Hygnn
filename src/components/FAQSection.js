// src/components/FAQSection.js
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  width: 70%;
  max-width: 1250px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  padding: 4rem;

  /* Glassy dark FAQ card on top of page background */
  background: ${({ theme }) => `
    radial-gradient(
      circle at top left,
      rgba(0, 177, 213, 0.18),
      transparent 40%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(98, 28, 208, 0.22),
      transparent 45%
    ),
    ${theme.background === "#ffffff" ? "rgba(10, 15, 25, 0.96)" : "rgba(10, 10, 15, 0.92)"}
  `};

  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 50px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  position: relative;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  color: #f9fafb;
`;

const SmallText = styled.p`
  margin: 8px 0 4px 0;
  font-size: 1rem;
  color: #cbd5e1;
`;

const EmailLink = styled.a`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const BigFAQ = styled.div`
  margin-top: 50px;
  font-size: 11rem;
  font-weight: 600;
  opacity: 0.5;
  user-select: none;

  background: linear-gradient(180deg, #8e8e8e, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 950px) {
    font-size: 7rem;
    position: static;
    margin-top: 20px;
    text-align: left;
  }
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const AccordionItem = styled.div`
  background: rgba(23, 32, 48, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.45);
  padding: 16px 20px;
  border-radius: 18px;
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: 0.25s ease;

  ${(props) =>
    props.$open &&
    `
    background: rgba(30, 41, 59, 0.9);
    border-color: rgba(148, 163, 184, 0.65);
  `}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Number = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #64748b;
  margin-right: 12px;
`;

const Question = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  flex: 1;
  color: #ffffff;
`;

const Chevron = styled.span`
  font-size: 1.2rem;
  color: #94a3b8;
  transition: 0.25s ease;

  ${(props) =>
    props.$open &&
    `
    transform: rotate(180deg);
  `}
`;

const Answer = styled.p`
  margin: 12px 0 4px 0;
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.55;
  padding-left: 32px;
`;

const FAQ_DATA = [
  {
    id: 1,
    question: "What is a hygiene level assessment?",
    answer:
      "A structured evaluation of your kitchen’s hygiene covering surfaces, equipment, storage, and staff practices. You receive a score and a breakdown of areas needing improvement.",
  },
  {
    id: 2,
    question: "Do you visit the kitchen in person?",
    answer:
      "Yes, our hygiene specialists visit your site to perform a detailed inspection. Follow-ups may combine in-person checks with digital reviews.",
  },
  {
    id: 3,
    question: "Will this disrupt my operations?",
    answer:
      "No. We schedule visits around your service hours and work with your team so normal operations continue without interruptions.",
  },
  {
    id: 4,
    question: "Is this suitable for small restaurants?",
    answer:
      "Absolutely. We support single outlets, cloud kitchens, and large chains — the scoring system adapts to all formats.",
  },
  {
    id: 5,
    question: "What happens after the assessment?",
    answer:
      "You get a clear action plan with prioritized fixes. We can also provide ongoing audits and cleaning services to maintain your score.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="faq">
      <Container>
        <LeftSide>
          <HeaderTitle>Questions & Answers</HeaderTitle>
          <SmallText>Have more questions? Feel free to email us:</SmallText>
          <EmailLink href="mailto:support@hygnn.com">
            support@hygnn.com
          </EmailLink>

          <BigFAQ>FAQ</BigFAQ>
        </LeftSide>

        <AccordionList>
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <AccordionItem
                key={item.id}
                $open={isOpen}
                onClick={() => toggle(item.id)}
              >
                <Row>
                  <Number>{String(index + 1).padStart(2, "0")}</Number>
                  <Question>{item.question}</Question>
                  <Chevron $open={isOpen}>⌄</Chevron>
                </Row>

                {isOpen && <Answer>{item.answer}</Answer>}
              </AccordionItem>
            );
          })}
        </AccordionList>
      </Container>
    </Section>
  );
};

export default FAQSection;
