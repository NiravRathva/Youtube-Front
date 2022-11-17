import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from "../Redux/UserSlice";
import { Link ,useNavigate} from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
  border-radius: 5px;

`;
const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const Linkss = styled.div`
  margin-left: 50px;
`;
const Links = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart())
      const res = await axios.post("auth/signin", { name, password })
      dispatch(loginSuccess(res.data))  
      navigate(`/`)
      
    } catch (error) {
      dispatch(loginFailure())
    }
  }

  return (
    <Container>

      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to Youtube</SubTitle>
        <Input placeholder="username" onChange={(e) => setName(e.target.value)} />
        <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><Button onClick={handleLogIn}>Sign in</Button></Link>
        <Title>or</Title>
        <Input placeholder="username" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Button >Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Linkss>
          <Links>Help</Links>
          <Links>Privacy</Links>
          <Links>Terms</Links>
        </Linkss>
      </More>
    </Container>
  );
};

export default SignIn;