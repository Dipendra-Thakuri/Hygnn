// src/pages/LandingPage.js
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProblemsSection from "../components/ProblemsSection";
import WhyUsSection from "../components/WhyUsSection";
import ContactSection from "../components/ContactSection";
import KitchenSkillsSection from "../components/KitchenSkillsSection";
import HygieneLevelSection from "../components/HygieneLevelSection";
import FAQSection from "../components/FAQSection";
import AboutUsSection from "../components/AboutUsSection";

const LandingMain = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: Arial, sans-serif;
  transition: background 0.3s ease, color 0.3s ease;
`;

const LandingPage = ({ isDark, setIsDark }) => {
  return (
    <LandingMain id="landingpage">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <ProblemsSection />
      <AboutUsSection />
      <KitchenSkillsSection />
      <WhyUsSection />
      <HygieneLevelSection />
      <ContactSection />
      <FAQSection />
      <Footer isDark={isDark} />
    </LandingMain>
  );
};

export default LandingPage;
