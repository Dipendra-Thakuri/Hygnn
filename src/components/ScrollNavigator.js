import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const SECTIONS = [
  "hero",
  "problems",
  "kitchen-skills",
  "why-us",
  "hygiene-level",
  "contact",
  "faq",
  "footer",
];

/* ---------------- Animations ---------------- */

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
`;

/* ---------------- UI ---------------- */

const GradientBorder = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;

  padding: 2px;
  border-radius: 999px;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0,
    #00c2a0,
    #00b1d5
  );
  background-size: 300% 100%;
  animation: ${borderFlow} 6s linear infinite, ${float} 2.6s ease-in-out infinite;
`;

const ArrowButton = styled.button`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  transition: transform 0.25s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

const ArrowIcon = styled(FiChevronDown)`
  font-size: 2rem;
  transition: transform 0.35s ease;

  ${({ $up }) => $up && "transform: rotate(180deg);"}
`;

/* ---------------- Logic ---------------- */

const ScrollNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      SECTIONS.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (currentIndex < SECTIONS.length - 1) {
      document
        .getElementById(SECTIONS[currentIndex + 1])
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isAtFooter = currentIndex === SECTIONS.length - 1;

  return (
    <GradientBorder>
      <ArrowButton onClick={handleClick} aria-label="Scroll navigation">
        <ArrowIcon $up={isAtFooter} />
      </ArrowButton>
    </GradientBorder>
  );
};

export default ScrollNavigator;
