// src/components/Layout/Container.js
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${({ size }) =>
    size === "wide"
      ? "min(1920px, 95vw)"
      : size === "narrow"
      ? "900px"
      : "min(1280px, 92vw)"};

  margin-inline: auto;
  padding-inline: clamp(1rem, 2.5vw, 2.25rem);
`;

export default Container;
