import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ================= PAGE ================= */

const PageWrapper = styled.main`
  min-height: calc(100svh - var(--header-height, 0px));
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.background};
`;

/* ================= FRAME ================= */

const Frame = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 560px;

  margin: 2rem;
  padding: 1.5rem;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#000000ff" : "#ffffffff"};

  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ================= CARD ================= */

const Card = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 500px;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#0f172a" : "#ffffff"};

  border-radius: 16px;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.12)"
        : "rgba(15,23,42,0.15)"};

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= LEFT ================= */

const Left = styled.div`
  padding: 3.5rem 3.8rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  margin-top: 0.8rem;
  max-width: 420px;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#94a3b8" : "#475569"};
`;

const Form = styled.form`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  height: 52px;
  padding: 0 16px;
  border-radius: 10px;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#020617" : "#f8fafc"};

  color: ${({ theme }) => theme.text};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(148,163,184,0.35)"
        : "rgba(148,163,184,0.6)"};

  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

const PrimaryButton = styled.button`
  height: 54px;
  margin-top: 0.8rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0
  );
`;

const Helper = styled.p`
  margin-top: 1.4rem;
  font-size: 0.9rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#94a3b8" : "#475569"};

  span {
    color: #38bdf8;
    cursor: pointer;
  }
`;

/* ================= RIGHT ================= */

const Right = styled.div`
  padding: 3.5rem 2.8rem;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#020617" : "#f8fafc"};

  border-left: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(15,23,42,0.1)"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const SocialTitle = styled.h3`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const SocialButton = styled.button`
  height: 48px;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  font-weight: 500;

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(148,163,184,0.35)"
        : "rgba(148,163,184,0.6)"};

  &:hover {
    border-color: #38bdf8;
  }
`;

/* ================= COMPONENT ================= */

const LoginPage = ({ isDark, setIsDark }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <PageWrapper>
        <Frame>
          <Card>
            {/* LEFT */}
            <Left>
              <Title>Login to your account</Title>
              <Subtitle>
                Access hygiene insights, audits, and compliance dashboards
                across all your kitchens.
              </Subtitle>

              <Form>
                <Input placeholder="Email address" />
                <Input type="password" placeholder="Password" />
                <PrimaryButton>Login to your account</PrimaryButton>
              </Form>

              <Helper>
                Forgot password? <span>Reset</span>
                <br />
                New here? <span>Create account</span>
              </Helper>
            </Left>

            {/* RIGHT */}
            <Right>
              <SocialTitle>Or continue with</SocialTitle>
              <SocialButton>Sign in with Google</SocialButton>
              <SocialButton>Sign in with Microsoft</SocialButton>
              <SocialButton>Sign in with Apple</SocialButton>
            </Right>
          </Card>
        </Frame>
      </PageWrapper>

      <Footer isDark={isDark} />
    </>
  );
};

export default LoginPage;
