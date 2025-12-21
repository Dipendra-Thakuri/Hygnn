// src/pages/AboutUsPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ---------------- Layout ---------------- */

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Main = styled.main`
  flex: 1;
  padding: clamp(40px, 1vw, 70px) 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
`;

/* ---------------- Intro ---------------- */

const Intro = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3rem);
  line-height: 1.1;
  margin: 0;
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 18px auto 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

/* ---------------- Sub Navbar ---------------- */

const SubNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 34px;
  margin: 52px 0 40px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.12)"
        : "rgba(148,163,184,0.4)"};
`;

const SubNavItem = styled.button`
  all: unset;
  padding: 12px 4px;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 500;
  position: relative;
  color: ${({ active, theme }) =>
    active ? "#38bdf8" : theme.text};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: #38bdf8;
    transform: ${({ active }) => (active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.25s ease;
  }
`;

/* ---------------- Content ---------------- */

const ContentBox = styled.div`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 18px;
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 16px;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
`;

/* ---------------- Page ---------------- */

const AboutUsPage = ({ isDark, setIsDark }) => {
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <PageWrapper>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <Main>
        <Container>
          {/* INTRO */}
          <Intro>
            <Title>We are your hygiene partner</Title>
            <Subtitle>
              Hygnn brings together professional-grade hygiene products,
              on-ground services, and digital tools into one integrated
              ecosystem designed for modern food and hospitality businesses.
            </Subtitle>
          </Intro>

          {/* SUB NAV */}
          <SubNav>
            <SubNavItem
              active={activeTab === "products"}
              onClick={() => setActiveTab("products")}
            >
              Products
            </SubNavItem>

            <SubNavItem
              active={activeTab === "services"}
              onClick={() => setActiveTab("services")}
            >
              Tech
            </SubNavItem>

            <SubNavItem
              active={activeTab === "tools"}
              onClick={() => setActiveTab("tools")}
            >
              Services
            </SubNavItem>
          </SubNav>

          {/* CONTENT */}
          <ContentBox>
            {activeTab === "products" && (
              <>
                <SectionTitle>Professional hygiene products</SectionTitle>
                <Text>
                  Hygnn develops and supplies high-performance chemical hygiene
                  solutions designed specifically for commercial kitchens,
                  food processing units, and hospitality environments.
                </Text>
                <Text>
                  Our product portfolio is built to deliver consistent results,
                  safe handling, and compatibility with real-world operations —
                  not laboratory-only conditions.
                </Text>
              </>
            )}

            {activeTab === "services" && (
              <>
                <SectionTitle>End-to-end hygiene services</SectionTitle>
                <Text>
                  From on-site hygiene audits to deep cleaning programs and SOP
                  implementation, Hygnn supports businesses throughout their
                  hygiene lifecycle.
                </Text>
                <Text>
                  Our teams work directly with operations leaders and staff to
                  ensure hygiene systems are practical, sustainable, and
                  audit-ready.
                </Text>
              </>
            )}

            {activeTab === "tools" && (
              <>
                <SectionTitle>Digital hygiene tools</SectionTitle>
                <Text>
                  Hygnn’s digital tools provide visibility into hygiene
                  performance through dashboards, audit records, checklist
                  compliance, and risk tracking.
                </Text>
                <Text>
                  These tools help businesses move from manual, people-dependent
                  hygiene to structured, data-driven hygiene management.
                </Text>
              </>
            )}
          </ContentBox>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default AboutUsPage;
