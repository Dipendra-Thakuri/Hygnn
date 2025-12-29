import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

/* ================= PAGE ================= */

const PageWrapper = styled.main`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.background};
`;

/* ================= BACK BUTTON ================= */

const BackButton = styled.button`
  position: absolute;
  top: 28px;
  left: 28px;

  display: flex;
  align-items: center;
  gap: 6px;

  background: transparent;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  opacity: 0.8;

  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 1;
    transform: translateX(-2px);
  }
`;

const BackIcon = styled(LuArrowLeft)`
  font-size: 1.2rem;
`;

/* ================= CARD ================= */

const Card = styled.div`
  width: 100%;
  max-width: 360px;

  padding: 2.6rem 2.4rem;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#0f172a" : "#ffffff"};

  border-radius: 2px;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.12)"
        : "rgba(15,23,42,0.15)"};

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 20px 60px rgba(0,0,0,0.55)"
      : "0 20px 50px rgba(15,23,42,0.15)"};
`;

/* ================= TEXT ================= */

const Title = styled.h1`
  margin: 0;
  padding-bottom: 24px;
  font-size: 2.1rem;
  text-align: center;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #0083ff,
    #005fff,
    #621cd0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* ================= FORM ================= */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.85rem;
  margin-bottom: 8px;
  opacity: 0.85;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#ffffff" : "#000000"};
`;

/* -------- Glow Wrapper -------- */

const GlowField = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;

    background: linear-gradient(
      90deg,
      #00b1d5,
      #009dff,
      #0083ff,
      #005fff,
      #621cd0
    );

    transition: width 0.35s ease;
  }

  &:focus-within::after {
    width: 100%;
  }
`;

/* -------- Inputs -------- */

const Input = styled.input`
  width: 100%;
  padding: 14px 10px 12px;
  font-size: 0.95rem;

  background: transparent;
  color: ${({ theme }) => theme.text};

  border: none;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(148,163,184,0.35)"
        : "rgba(148,163,184,0.6)"};

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "#64748b" : "#94a3b8"};
  }
`;

/* -------- Button -------- */

const PrimaryButton = styled.button`
  margin-top: 0.8rem;
  height: 50px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0
  );

  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

/* ================= HELPER ================= */

const Helper = styled.div`
  margin-top: 1.4rem;
  text-align: center;
  font-size: 0.85rem;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#94a3b8" : "#475569"};

  span {
    color: #38bdf8;
    cursor: pointer;
    white-space: nowrap;
  }
`;

/* ================= COMPONENT ================= */

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate("/")}>
        <BackIcon />
        Home
      </BackButton>

      <Card>
        <Title>Create Account</Title>

        <Form>
          <Field>
            <Label>Name</Label>
            <GlowField>
              <Input placeholder="Your full name" />
            </GlowField>
          </Field>

          <Field>
            <Label>Email</Label>
            <GlowField>
              <Input type="email" placeholder="Enter your email" />
            </GlowField>
          </Field>

          <Field>
            <Label>Password</Label>
            <GlowField>
              <Input
                type="password"
                placeholder="Create a password"
              />
            </GlowField>
          </Field>

          <PrimaryButton>Create account</PrimaryButton>
        </Form>

        <Helper>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </Helper>
      </Card>
    </PageWrapper>
  );
};

export default RegisterPage;
