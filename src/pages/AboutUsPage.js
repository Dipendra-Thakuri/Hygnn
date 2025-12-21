// src/pages/AboutUsPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  "Periodical deep cleaning",
  "Site Hygiene Audits – Quality Checks",
  "Training services",
  "Process Standardisation (SOPs)",
  "Subscription Services",
  "Hygiene awareness drive",
  "Hygiene performance certificates",
  "Emergency support pack",
];

const tech = [
  "Ordering through portal",
  "Auto Dosing Systems",
  "Training Videos",
  "Access to SOPs",
  "Dashboards",
  "Hygiene Rating",
  "ROI Calculator",
  "Risk Meter",
];

/* ---------------- Layout ---------------- */

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ $isDark }) => ($isDark ? "#000000" : "#ffffff")};
  color: ${({ $isDark }) => ($isDark ? "#f1f5f9" : "#1e293b")};
`;

const Main = styled.main`
  flex: 1;
  padding: clamp(40px, 8vw, 70px) 0;
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
  font-size: clamp(2.2rem, 4.8vw, 5rem);
  line-height: 0.9;
  margin: 0;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00b1d5, #009dff, #0083ff, #005fff, #621cd0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 18px auto 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ $isDark }) => ($isDark ? "#cbd5e1" : "#64748b")};
`;

/* ---------------- Sub Navbar ---------------- */

const SubNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 34px;
  margin: 52px 0 40px;
  border-bottom: 1px solid ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,0.12)" : "rgba(148,163,184,0.3)"};
`;

const SubNavItem = styled.button`
  all: unset;
  padding: 12px 4px;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 500;
  position: relative;
  color: ${({ $active, $isDark }) =>
    $active ? "#38bdf8" : $isDark ? "#94a3b8" : "#64748b"};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $isDark }) => ($isDark ? "#e2e8f0" : "#1e293b")};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: #38bdf8;
    transform: ${({ $active }) => ($active ? "scaleX(1)" : "scaleX(0)")};
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
  color: ${({ $isDark }) => ($isDark ? "#f1f5f9" : "#1e293b")};
`;

/* ---------------- Products Layout ---------------- */

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 20px 60px rgba(0,0,0,0.6)" : "0 20px 40px rgba(15,23,42,0.15)"};
`;

const BuyButton = styled.button`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProductSubHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 14px;
  font-weight: 600;
  color: ${({ $isDark }) => ($isDark ? "#93c5fd" : "#2563eb")};
`;

const ProductText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 16px;
  text-align: justify;
  color: ${({ $isDark }) => ($isDark ? "#cbd5e1" : "#64748b")};
`;

/* ---------- Section ---------- */

const Block = styled.div`
  margin-top: 3.5rem;
`;

const BlockTitle = styled.h2`
  font-size: 1.9rem;
  font-family: "KentledgeBold", sans-serif;
  margin-bottom: 1.8rem;
  color: ${({ $isDark }) => ($isDark ? "#f1f5f9" : "#1e293b")};
`;

/* ---------- Grid ---------- */

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

/* ---------- Clean Banner Card ---------- */

const BannerCard = styled.div`
  position: relative;
  padding: 18px 20px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  background: ${({ $isDark }) => ($isDark ? "#1e293b" : "#f8fafc")};
  color: ${({ $isDark }) => ($isDark ? "#e2e8f0" : "#334155")};
  border: 1px solid ${({ $isDark }) =>
    $isDark ? "rgba(148,163,184,0.15)" : "rgba(203,213,225,0.6)"};
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 2px 8px rgba(0,0,0,0.2)" : "0 2px 8px rgba(15,23,42,0.06)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ $isDark }) =>
      $isDark
        ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
        : "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)"};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  & > span {
    position: relative;
    z-index: 1;
    display: block;
    transition: color 0.3s ease;
  }

  &:hover {
    border-color: transparent;
    box-shadow: ${({ $isDark }) =>
      $isDark
        ? "0 8px 24px rgba(59,130,246,0.3)"
        : "0 8px 24px rgba(96,165,250,0.3)"};
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover > span {
    color: #ffffff;
  }
`;

/* ---------------- Page ---------------- */

const AboutUsPage = ({ isDark, setIsDark }) => {
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <PageWrapper $isDark={isDark}>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <Main>
        <Container>
          <Intro>
            <Title>
              We are your <GradientText>hygiene partner</GradientText>
            </Title>
            <Subtitle $isDark={isDark}>
              Hygnn delivers an integrated hygiene ecosystem by combining Products, Technology, 
              and Services built for modern Businesses.
            </Subtitle>
          </Intro>

          <SubNav $isDark={isDark}>
            <SubNavItem
              $isDark={isDark}
              $active={activeTab === "products"}
              onClick={() => setActiveTab("products")}
            >
              Products
            </SubNavItem>

            <SubNavItem
              $isDark={isDark}
              $active={activeTab === "tools"}
              onClick={() => setActiveTab("tools")}
            >
              Tech
            </SubNavItem>

            <SubNavItem
              $isDark={isDark}
              $active={activeTab === "services"}
              onClick={() => setActiveTab("services")}
            >
              Services
            </SubNavItem>
          </SubNav>

          <ContentBox>
            {activeTab === "products" && (
              <>
                <SectionTitle $isDark={isDark}>The Foundation (Products)</SectionTitle>

                <ProductGrid>
                  <ProductImageWrapper>
                    <ProductImage
                      $isDark={isDark}
                      src="/products-chemicals.jpg"
                      alt="Professional cleaning chemicals"
                    />
                    <BuyButton>Buy Now</BuyButton>
                  </ProductImageWrapper>

                  <div>
                    <ProductSubHeading $isDark={isDark}>
                      A leading innovator in the field of cleaning chemicals
                    </ProductSubHeading>

                    <ProductText $isDark={isDark}>
                      Olive Ridley Singapore Pte Ltd is a leading innovator in the field of
                      cleaning chemicals.
                    </ProductText>

                    <ProductText $isDark={isDark}>
                      Established with a commitment to excellence, Ecopositive Chemistry Pvt
                      Ltd, our exclusive Indian manufacturer and marketer, takes pride in
                      being a trusted partner for industries and businesses seeking
                      top-tier solutions for their cleaning and sanitation needs in India.
                    </ProductText>

                    <ProductText $isDark={isDark}>
                      Our mission is to create and deliver cutting-edge cleaning chemicals
                      that not only meet but exceed the highest industry standards. We are
                      dedicated to providing effective, sustainable, and safe solutions
                      that contribute to a healthier and more environmentally conscious
                      world.
                    </ProductText>
                  </div>
                </ProductGrid>
              </>
            )}

            {activeTab === "tools" && (
              <Block>
                <BlockTitle $isDark={isDark}>The Efficiency Factor (Tech)</BlockTitle>
                <BannerGrid>
                  {tech.map((item) => (
                    <BannerCard key={item} $isDark={isDark}>
                      <span>{item}</span>
                    </BannerCard>
                  ))}
                </BannerGrid>
              </Block>
            )}

            {activeTab === "services" && (
              <Block>
                <BlockTitle $isDark={isDark}>The High-Value Offering (Services)</BlockTitle>
                <BannerGrid>
                  {services.map((item) => (
                    <BannerCard key={item} $isDark={isDark}>
                      <span>{item}</span>
                    </BannerCard>
                  ))}
                </BannerGrid>
              </Block>
            )}
          </ContentBox>
        </Container>
      </Main>

      <Footer isDark={isDark} />
    </PageWrapper>
  );
};

export default AboutUsPage;