// src/components/Layout/Section.js
import styled from "styled-components";

const Section = styled.section`
  min-height: ${({ variant }) =>
    variant === "hero" ? "100svh" : "auto"};

  padding-block: ${({ variant }) =>
    variant === "hero"
      ? "0"
      : "clamp(80px, 10vh, 140px)"};

  display: flex;
  justify-content: center;

  align-items: ${({ variant }) =>
    variant === "hero" ? "center" : "stretch"};
`;

export default Section;
