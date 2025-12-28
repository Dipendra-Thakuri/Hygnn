// src/pages/LandingPage.js
import { lazy, Suspense } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import KitchenSkillsSection from "../components/KitchenSkillsSection";
import WhyUsSection from "../components/WhyUsSection";
import ScrollNavigator from "../components/ScrollNavigator";
import Container from "../components/layout/Container";
//import MarqueeSection from "../components/MarqueeSection";

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
  min-height: 100svh;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  position: relative;
`;

const LandingPage = ({ isDark, setIsDark }) => {
  return (
    <LandingWrapper id="landingpage">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <MainContent>
        <Section id="hero">
          <Container>
          <HeroSection />
          </Container>
        </Section>

        {/* <Section>
          <Container>
          <MarqueeSection />
          </Container>
        </Section> */}

        <Section id="problems">
          <Container>
          <ProblemsSection />
          </Container>
        </Section>

        <Section id="kitchen-skills">
          <Container>
          <KitchenSkillsSection />
          </Container>
        </Section>

        <Section id="why-us">
          <Container>
          <WhyUsSection />
          </Container>
        </Section>

        {/* Lazy loaded sections */}
        <Suspense fallback={null}>
          <Section id="hygiene-level">
            <Container>
            <HygieneLevelSection />
            </Container>
          </Section>

          <Section id="contact">
            <Container>
            <ContactSection />
            </Container>
          </Section>

          <Section id="faq">
            <Container>
            <FAQSection />
            </Container>
          </Section>
        </Suspense>
      </MainContent>

      <ScrollNavigator />
      <Footer isDark={isDark} />
    </LandingWrapper>
  );
};

export default LandingPage;
