// src/pages/AboutUsPage.js
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  padding: clamp(80px, 10vw, 110px) 0;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 100px;
`;

/* ---------------- Text ---------------- */

const Eyebrow = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #38bdf8;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3rem);
  line-height: 1.1;
  margin: 0;
`;

const Text = styled.p`
  max-width: 760px;
  margin-top: 18px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#4b5563" : "#cbd5e1"};
  text-align: justify;
`;

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutImageWrap = styled(motion.div)`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  height: 420px;

  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "linear-gradient(145deg, #f9fafb, #e5e7eb)"
      : "linear-gradient(145deg, #020617, #0f172a)"};

  box-shadow: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "0 20px 50px rgba(0,0,0,0.12)"
      : "0 20px 60px rgba(0,0,0,0.45)"};

  @media (max-width: 900px) {
    height: 360px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ---------------- Cards ---------------- */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-top: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  height: 180px;
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;

  background-size: cover;
  background-position: center;

  border: 1px solid rgba(148, 163, 184, 0.35);

  display: flex;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.65)
    );
    z-index: 0;
  }
`;

const CardTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 18px 20px;
  font-size: 1.15rem;
  color: #ffffff;
`;

/* ---------------- Animation ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Page ---------------- */

const AboutUsPage = ({ isDark, setIsDark }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <PageWrapper>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <Main>
        <Container>
          {/* ABOUT */}
          <Section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <AboutLayout>
    {/* LEFT: TEXT */}
    <div>
      <Eyebrow>About Hygnn</Eyebrow>
      <Title>We are your hygiene partner</Title>

      <Text>
        Hygnn was founded to help businesses run hygiene the same way they run
        operations — structured, visible, and under control. In modern
        businesses, hygiene must function as a system that is measurable,
        auditable, and continuously improving.
      </Text>

      <Text>
        We are building a new-age chemical hygiene company that brings together 
        high-performance products, expert on-ground services, and practical digital 
        tools under one integrated ecosystem. Our role goes far beyond supplying 
        materials. Hygnn works as a long-term hygiene partner, helping businesses 
        maintain consistent standards while reducing operational risk.
      </Text>

      <Text>
        Our team works closely with founders, operations leaders, and frontline 
        staff to design hygiene programs that fit real-world operations. From single 
        outlets to multi-location brands, our approach is built to scale without 
        compromising hygiene quality, safety, or compliance.
      </Text>

      <Text>
        Hygnn’s mission is to help businesses move from manual, people-dependent 
        hygiene practices to structured, system-driven hygiene management. Our vision 
        is to set a new benchmark for professional hygiene by combining chemistry, 
        process, and technology into one seamless experience — enabling businesses 
        to operate with confidence, clarity, and audit readiness at all times.
      </Text>
    </div>

    {/* RIGHT: IMAGE */}
    <AboutImageWrap
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <AboutImage
        src="/images/leadership/ceo-placeholder.jpg"
        alt="Hygnn leadership"
      />
    </AboutImageWrap>
  </AboutLayout>
</Section>


          {/* PRODUCTS */}
          <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Eyebrow>Products</Eyebrow>
            <Title>Professional hygiene products</Title>

            <Grid>
              {[
                { title: "Restaurants & Cloud Kitchens", img: "/images/sectors/restaurant.jpg" },
                { title: "Hotels & Hospitality", img: "/images/sectors/hotel.jpg" },
                { title: "Food Processing", img: "/images/sectors/processing.jpg" },
                { title: "Healthcare & Institutions", img: "/images/sectors/healthcare.jpg" },
                { title: "Corporate Cafeterias", img: "/images/sectors/corporate.jpg" },
                { title: "QSR & Café Chains", img: "/images/sectors/qsr.jpg" }
              ].map(item => (
                <Card key={item.title} whileHover={{ y: -6, scale: 1.02 }} style={{ backgroundImage: `url(${item.img})` }}>
                  <CardTitle>{item.title}</CardTitle>
                </Card>
              ))}
            </Grid>
          </Section>

          {/* SERVICES */}
          <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Eyebrow>Services</Eyebrow>
            <Title>End-to-end hygiene services</Title>

            <Grid>
              {[
                { title: "On-site hygiene audits", img: "/images/services/audit.jpg" },
                { title: "Deep cleaning programs", img: "/images/services/deep-clean.jpg" },
                { title: "SOP design & rollout", img: "/images/services/sop.jpg" },
                { title: "Staff training & coaching", img: "/images/services/training.jpg" },
                { title: "Compliance & audit readiness", img: "/images/services/compliance.jpg" },
                { title: "Corrective action planning", img: "/images/services/corrective.jpg" }
              ].map(service => (
                <Card key={service.title} whileHover={{ y: -6, scale: 1.02 }} style={{ backgroundImage: `url(${service.img})` }}>
                  <CardTitle>{service.title}</CardTitle>
                </Card>
              ))}
            </Grid>
          </Section>

          {/* TOOLS */}
          <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Eyebrow>Tools</Eyebrow>
            <Title>Digital hygiene enablement</Title>

            <Grid>
              {[
                { title: "Hygiene scoring dashboards", img: "/images/tools/dashboard.jpg" },
                { title: "Checklist compliance tracking", img: "/images/tools/checklist.jpg" },
                { title: "Digital audit records", img: "/images/tools/audit.jpg" },
                { title: "Risk trend visibility", img: "/images/tools/risk.jpg" },
                { title: "Multi-site monitoring", img: "/images/tools/multisite.jpg" },
                { title: "Accountability & reporting", img: "/images/tools/report.jpg" }
              ].map(tool => (
                <Card key={tool.title} whileHover={{ y: -6, scale: 1.02 }} style={{ backgroundImage: `url(${tool.img})` }}>
                  <CardTitle>{tool.title}</CardTitle>
                </Card>
              ))}
            </Grid>
          </Section>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default AboutUsPage;
