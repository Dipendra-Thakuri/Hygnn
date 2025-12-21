// src/pages/LandingPage.js
import { lazy, Suspense } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import KitchenSkillsSection from "../components/KitchenSkillsSection";
import WhyUsSection from "../components/WhyUsSection";

/* Lazy-loaded sections (below the fold) */
const HygieneLevelSection = lazy(() =>
  import("../components/HygieneLevelSection")
);
const ContactSection = lazy(() =>
  import("../components/ReviewsSection")
);
const FAQSection = lazy(() =>
  import("../components/FAQSection")
);

const LandingWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
`;

const LandingPage = ({ isDark, setIsDark }) => {
  return (
    <LandingWrapper id="landingpage">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <MainContent>
        <Section id="hero">
          <HeroSection />
        </Section>

        <Section id="problems">
          <ProblemsSection />
        </Section>

        <Section id="kitchen-skills">
          <KitchenSkillsSection />
        </Section>

        <Section id="why-us">
          <WhyUsSection />
        </Section>

        {/* Lazy loaded sections */}
        <Suspense fallback={null}>
          <Section id="hygiene-level">
            <HygieneLevelSection />
          </Section>

          <Section id="contact">
            <ContactSection />
          </Section>

          <Section id="faq">
            <FAQSection />
          </Section>
        </Suspense>
      </MainContent>

      <Footer isDark={isDark} />
    </LandingWrapper>
  );
};

export default LandingPage;
