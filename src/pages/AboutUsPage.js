// src/pages/AboutUsPage.js
import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: "KentledgeBold";
`;

/* ===== SUB HEADER ===== */
const SubHeader = styled.div`
  position: sticky;
  top: 0px;
  z-index: 20;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#ffffff"
        ? "rgba(148,163,184,0.4)"
        : "rgba(148,163,184,0.15)"};
`;

const SubNav = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 32px;
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    padding: 14px 20px;
    gap: 18px;
  }
`;

const SubLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  opacity: 0.75;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
    color: #38bdf8;
  }
`;

/* ===== MAIN CONTENT ===== */
const Main = styled.main`
  flex: 1;
  padding: 80px 0 70px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 90px;
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #38bdf8;
  font-weight: 600;
  margin: 0 0 12px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Text = styled.p`
  margin-top: 18px;
  max-width: 720px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

const AboutUsPage = ({ isDark, setIsDark }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper id="aboutus">
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* ===== SUB HEADER ===== */}
      <SubHeader>
        <SubNav>
          <SubLink onClick={() => scrollTo("about")}>About Us</SubLink>
          <SubLink onClick={() => scrollTo("products")}>Products</SubLink>
          <SubLink onClick={() => scrollTo("services")}>Services</SubLink>
        </SubNav>
      </SubHeader>

      <Main>
        <Container>
          {/* ===== ABOUT US SECTION ===== */}
          <Section id="about">
            <Eyebrow>About Hygnn</Eyebrow>
            <Title>We are your hygiene partner</Title>
            <Text>
              Hygnn exists to help commercial kitchens maintain consistent,
              measurable, and audit-ready hygiene standards. We bring together
              products, on-ground services, and simple digital tools so hygiene
              becomes a system — not a daily struggle.
            </Text>
            <Text>
              From single restaurants to multi-location brands, we work closely
              with operations teams to reduce risk, improve compliance, and
              build long-term hygiene discipline.
            </Text>
          </Section>

          {/* ===== PRODUCTS PLACEHOLDER ===== */}
          <Section id="products">
            <Eyebrow>Products</Eyebrow>
            <Title>Professional hygiene products</Title>
            <Text>
              Our product portfolio covers kitchen cleaning chemicals, tools,
              and consumables designed for commercial environments. Each
              product is selected for effectiveness, safety, and operational
              consistency.
            </Text>
          </Section>

          {/* ===== SERVICES PLACEHOLDER ===== */}
          <Section id="services">
            <Eyebrow>Services</Eyebrow>
            <Title>End-to-end hygiene services</Title>
            <Text>
              We offer on-site audits, deep cleaning, SOP implementation,
              training, and ongoing hygiene monitoring. Our services adapt to
              your kitchen’s scale, complexity, and risk profile.
            </Text>
          </Section>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default AboutUsPage;
