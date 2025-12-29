import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ================= PAGE ================= */

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Main = styled.main`
  flex: 1;
  padding: clamp(80px, 10vh, 120px) 0;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 32px);
`;

/* ================= HEADER ================= */

const HeaderBlock = styled.div`
  max-width: 620px;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  line-height: 1.1;
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

const Subtitle = styled.p`
  margin-top: 14px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

/* ================= GRID ================= */

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

/* ================= FORM ================= */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.85rem;
  margin-bottom: 6px;
  opacity: 0.85;
`;

/* ---------- Glow Wrapper ---------- */

const GlowField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;

    background: linear-gradient(
      90deg,
      #00b1d5,
      #009dff,
      #0083ff,
      #005fff,
      #621cd0
    );

    transition: width 0.35s ease;
  }

  &:focus-within::after {
    width: 100%;
  }
`;

/* ---------- Inputs ---------- */

const Input = styled.input`
  padding: 14px 4px 12px;
  font-size: 0.95rem;

  background: transparent;
  color: ${({ theme }) => theme.text};

  border: none;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.6)"
        : "rgba(148,163,184,0.35)"};

  transition: border-color 0.25s ease;

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#94a3b8" : "#64748b"};
  }
`;

const Textarea = styled.textarea`
  padding: 14px 4px 12px;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;

  background: transparent;
  color: ${({ theme }) => theme.text};

  border: none;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.6)"
        : "rgba(148,163,184,0.35)"};

  transition: border-color 0.25s ease;

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#94a3b8" : "#64748b"};
  }
`;

/* ---------- Submit Button ---------- */

const SubmitButton = styled.button`
  margin-top: 18px;
  align-self: flex-start;

  padding: 14px 34px;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  cursor: pointer;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0
  );
  color: #ffffff;

  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;

/* ================= INFO CARD ================= */

const InfoCard = styled.div`
  padding: 30px 28px;
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

/* ================= COMPONENT ================= */

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
            <Title>
              Let’s talk <GradientText>Hygiene</GradientText>
            </Title>
            <Subtitle>
              Whether you run a single kitchen or manage multiple outlets, our
              team will help you build cleaner, safer operations.
            </Subtitle>
          </HeaderBlock>

          <ContentGrid>
            <Form>
              <Field>
                <Label>Name</Label>
                <GlowField>
                  <Input placeholder="Your full name" />
                </GlowField>
              </Field>

              <Field>
                <Label>Email</Label>
                <GlowField>
                  <Input type="email" placeholder="you@company.com" />
                </GlowField>
              </Field>

              <Field>
                <Label>Company / Kitchen</Label>
                <GlowField>
                  <Input placeholder="Restaurant or brand name" />
                </GlowField>
              </Field>

              <Field>
                <Label>Message</Label>
                <GlowField>
                  <Textarea placeholder="Tell us about your hygiene challenges…" />
                </GlowField>
              </Field>

              <SubmitButton>Send message</SubmitButton>
            </Form>

            <InfoCard>
              <InfoTitle>Reach Hygnn</InfoTitle>
              <InfoItem>📧 hello@hygnn.com</InfoItem>
              <InfoItem>📞 +91 9XXXXXXXXX</InfoItem>
              <InfoItem>📍 Serving commercial kitchens across India</InfoItem>
              <InfoItem>🕒 Mon–Sat · 9:30 AM – 6:30 PM</InfoItem>
            </InfoCard>
          </ContentGrid>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default ContactUsPage;
