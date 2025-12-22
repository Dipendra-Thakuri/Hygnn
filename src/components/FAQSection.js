// src/components/FAQSection.js
import React, { useState } from "react";
import styled from "styled-components";

/* ------------------ Section ------------------ */

const Section = styled.section`
  padding: clamp(60px, 10vw, 80px) 5vw;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`;

/* ------------------ Container (BLUE-BLACK GLASS) ------------------ */

const Container = styled.div`
  width: 90%;
  max-width: 1250px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 3rem;
  padding: clamp(2.5rem, 6vw, 4rem);

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
    ${
      theme.mode === "dark"
        ? "rgba(10, 15, 25, 0.96)"
        : "rgba(15, 23, 42, 0.92)"
    }
  `};

  border-radius: clamp(28px, 5vw, 50px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

/* ------------------ Left ------------------ */

const LeftSide = styled.div`
  position: relative;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 5vw, 2.4rem);
  color: #f9fafb;
  font-family: "KentledgeMedium";
`;

const SmallText = styled.p`
  margin: 0.6rem 0 0.25rem;
  font-size: 1rem;
  color: #cbd5e1;
  font-family: "KentledgeLight";
`;

const EmailLink = styled.a`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  font-family: "KentledgeMedium";

  &:hover {
    opacity: 0.8;
  }
`;

const BigFAQ = styled.div`
  margin-top: clamp(24px, 6vw, 50px);
  font-size: clamp(5rem, 12vw, 11rem);
  opacity: 0.45;
  user-select: none;

  background: linear-gradient(180deg, #8e8e8e, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* ------------------ Accordion ------------------ */

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AccordionItem = styled.button`
  all: unset;
  cursor: pointer;

  background: rgba(23, 32, 48, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.45);
  padding: 1rem 2rem;
  border-radius: 18px;
  backdrop-filter: blur(4px);

  transition: background 0.25s ease, border-color 0.25s ease;

  ${({ $open }) =>
    $open &&
    `
      background: rgba(30, 41, 59, 0.9);
      border-color: rgba(148, 163, 184, 0.65);
    `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Number = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #64748b;
`;

const Question = styled.span`
  font-size: 1.05rem;
  font-family: "KentledgeMedium";
  flex: 1;
  color: #ffffff;
`;

const Chevron = styled.span`
  font-size: 1.2rem;
  color: #94a3b8;
  transition: transform 0.25s ease;

  ${({ $open }) => $open && "transform: rotate(180deg);"}
`;

const Answer = styled.p`
  margin: 12px 0 4px;
  font-family: "Kentledgelight";
  padding-left: 28px;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #cbd5e1;
`;

/* ------------------ Data ------------------ */

const FAQ_DATA = [
  {
    id: 1,
    question: "What do you mean by Hygnn as a concept?",
    answer:
      "Hygnn is not just about using cleaning products. It is a system that combines the right products, correct processes, trained people, technology and continuous monitoring to ensure safe, consistent, and verifiable outcomes.",
  },
  {
    id: 2,
    question: "How is your approach different from traditional cleaning?",
    answer:
      "Traditional cleaning focuses on products alone. Our approach integrates: Professionally formulated hygiene products , Technology-driven workflows and monitoring , Structured training and on-ground support , This ensures hygiene is measurable, repeatable, and compliant, not dependent on individuals.",
  },
  {
    id: 3,
    question: "How do you measure hygiene performance?",
    answer:
      "Performance is measured using, Task completion data, Compliance scores, Audit outcomes. Process adherence. This allows hygiene to be tracked, improved, and sustained.",
  },
  {
    id: 4,
    question: "Can your system be implemented in existing operations?",
    answer:
      "Yes. Our model is designed to integrate seamlessly with existing operations without disrupting daily workflows.",
  },
  {
    id: 5,
    question: "What kind of on-ground support do you provide ?",
    answer:
      "Hygiene is not a one-time setup. We provide, On-ground and remote support , Process optimisation and corrective actions, Performance reviews and improvement plans, Continuous guidance as operations evolve. Support ensures long-term consistency and results.",
  },
];

/* ------------------ Component ------------------ */

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

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
                onClick={() =>
                  setOpenId(isOpen ? null : item.id)
                }
              >
                <Row>
                  <Number>
                    {String(index + 1).padStart(2, "0")}
                  </Number>
                  <Question>{item.question}</Question>
                  <Chevron $open={isOpen}>+</Chevron>
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
