// src/components/Layout/Container.js
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${({ size }) =>
    size === "wide" ? "1400px" :
    size === "narrow" ? "800px" :
    "1100px"};

  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`;

export default Container;
