import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";


const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "KentledgeBold";
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Main = styled.main`
  flex: 1;
  padding: 60px 0 60px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeaderBlock = styled.div`
  max-width: 620px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 14px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const GradientText = styled.span`
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

/* -------- FORM -------- */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 6px;
  opacity: 0.85;
`;

const Input = styled.input`
  padding: 14px 14px;
  border-radius: 12px;
  font-size: 0.95rem;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "#f9fafb"
      : "rgba(15, 23, 42, 0.9)"};

  border: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.6)"
        : "rgba(148,163,184,0.35)"};

  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

const Textarea = styled.textarea`
  padding: 14px;
  border-radius: 12px;
  font-size: 0.95rem;
  min-height: 140px;
  resize: vertical;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "#f9fafb"
      : "rgba(15, 23, 42, 0.9)"};

  border: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.6)"
        : "rgba(148,163,184,0.35)"};

  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 15px 32px;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  cursor: pointer;

  background: linear-gradient(90deg, #00b1d5, #009dff, #621cd0);
  color: #fff;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;

/* -------- INFO CARD -------- */

const InfoCard = styled.div`
  padding: 28px 26px;
  border-radius: 22px;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(145deg, #f9fafb, #e5e7eb)"
      : "radial-gradient(circle at top, #111827, #020617)"};

  border: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.6)"
        : "rgba(148,163,184,0.35)"};
`;

const InfoTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 1.3rem;
`;

const InfoItem = styled.p`
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#374151" : "#cbd5e1"};
`;

const ContactUsPage = ({ isDark, setIsDark }) => {

    useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  return (
    <PageWrapper>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <Main>
        <Container>
          <HeaderBlock>
            <Title>Let’s talk <GradientText> Hygiene </GradientText> </Title>
            <Subtitle>
              Whether you run a single kitchen or manage multiple outlets,
              our team will help you build cleaner, safer operations.
            </Subtitle>
          </HeaderBlock>

          <ContentGrid>
            <Form>
              <Field>
                <Label>Name</Label>
                <Input placeholder="Your full name" />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input type="email" placeholder="you@company.com" />
              </Field>

              <Field>
                <Label>Company / Kitchen</Label>
                <Input placeholder="Restaurant or brand name" />
              </Field>

              <Field>
                <Label>Message</Label>
                <Textarea placeholder="Tell us about your hygiene challenges…" />
              </Field>

              <SubmitButton>Send message</SubmitButton>
            </Form>

            <InfoCard>
              <InfoTitle>Reach Hygnn</InfoTitle>
              <InfoItem>📧 hello@hygnn.com</InfoItem>
              <InfoItem>📞 +91 9XXXXXXXXX</InfoItem>
              <InfoItem>
                📍 Serving commercial kitchens across India
              </InfoItem>
              <InfoItem>
                🕒 Mon–Sat · 9:30 AM – 6:30 PM
              </InfoItem>
            </InfoCard>
          </ContentGrid>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default ContactUsPage;
