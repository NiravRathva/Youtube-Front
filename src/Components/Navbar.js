import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
position: sticky;
top: 0px;
height: 56px;
background-color: ${({ theme }) => theme.bgLighter};
`;


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
position: relative;
`;


const Search = styled.div`
position: absolute;
left: 0px;
right: 0px;
margin: auto;
width: 50%;
display:flex;
align-items: center;
justify-content: center;
padding: 5px;
border: 1px solid #ccc;
border-radius:5px
`;


const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding:6px;
  font-size:16px;
  width:100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
padding:5px 5px;
background-color:tranparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:5px;
font-weight:bold;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 10px;

    gap: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Container>

      <Wrapper>
        <Search>
          <Input placeholder="search" />
          <SearchOutlinedIcon />
        </Search>
        {user ? (<User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={user.img} />
              {user.name}
            </User>): (
          <Link to = "signin" style = {{ textDecoration: "none", color: "inherit" }}>
        <Button>
          <AccountCircleOutlinedIcon /> SIGN IN
        </Button>
      </Link>
       )}
    </Wrapper>
    </Container >
  )
}

export default Navbar