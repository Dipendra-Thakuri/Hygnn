import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ---------------- Layout ---------------- */

const PageWrapper = styled.main`
  min-height: calc(100svh - var(--header-height, 0px));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 3rem 3.5rem;
  border-radius: 28px;

  background: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 20px 80px rgba(0,0,0,0.55)"
      : "0 20px 60px rgba(0,0,0,0.12)"};
`;

/* ---------------- Typography ---------------- */

const Title = styled.h1`
  margin: 0;
  font-size: 2.1rem;
  font-family: "KentledgeBold";
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  margin: 0.6rem 0 2.2rem;
  text-align: center;
  font-size: 0.95rem;
  font-family: "KentledgeLight";
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#9ca3af" : "#4b5563"};
`;

/* ---------------- Form ---------------- */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  font-family: "KentledgeLight";

  &:focus {
    outline: none;
    border-color: #00b1d5;
  }
`;

const Button = styled.button`
  margin-top: 1.2rem;
  padding: 14px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  font-size: 1rem;
  font-family: "KentledgeMedium";
  color: white;

  background: linear-gradient(
    90deg,
    #00b1d5,
    #009dff,
    #621cd0
  );

  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterText = styled.p`
  margin-top: 1.6rem;
  text-align: center;
  font-size: 0.9rem;
  font-family: "KentledgeLight";

  span {
    color: #00b1d5;
    cursor: pointer;
  }
`;

/* ---------------- Component ---------------- */

const RegisterPage = ({ isDark, setIsDark }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <PageWrapper>
        <Card>
          <Title>Create your account</Title>
          <Subtitle>Start building a smarter hygiene ecosystem</Subtitle>

          <Form>
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />

            <Button type="submit">Create Account</Button>
          </Form>

          <FooterText>
            Already have an account? <span>Log in</span>
          </FooterText>
        </Card>
      </PageWrapper>

      <Footer />
    </>
  );
};

export default RegisterPage;
