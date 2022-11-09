import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logo from "../Static/Images/Youtube.png";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Popup } from './Popup';



const Container = styled.div`
top: 0px;
height:56px;
display:flex;
align-items:center;
width:100%;

background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
display:flex;
align-items: center;
gap:10px;
 justify-content: center;
 position:reletive;
`;
const Search = styled.div`
position: absolute;
left: 0px;
right:0px;
margin: auto;
width: 50%;
display:flex;
align-items: center;
justify-content: center;
padding: 5px;
border: 1px solid #ccc;
border-radius:5px;
color: ${({ theme }) => theme.text};
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
margin-right: 20px;

position: absolute;

right:0px;
top:10px;
    gap: 5px;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  margin-right: 22px;
right:0px;
top:10px;
gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
`;
const Logo = styled.div`
display:flex;
align-items:center;
gap:8px;
font-weight:bold;
color: ${({ theme }) => theme.text};
margin-left:35px;
font-size:20px;

`;
const Img = styled.img.attrs({
  src: `${logo}`
})`
width: 25px;
height: 30px;
`;
const Navbar = ({hide}) => {
  const [open, setOpen] = useState(false)
  const { user } = useSelector((state) => state.user);
  const hamburger=()=>{
    let menu=document.getElementById("items");
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}

  return (<>
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo><MenuOutlinedIcon onClick={hamburger} />
            <Img src={logo} />
            Youtube
          </Logo>
        </Link>
        <Search>
          <Input placeholder="search" />
          <SearchOutlinedIcon />
        </Search>
        {user ? (<User>
          <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
          <Avatar src={user.img} />
          {user.name}
        </User>) : (
          <Link to="signin" style={{ textDecoration: "none", color: "inherit" }}>
            <Button>
              <AccountCircleOutlinedIcon /> SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container >
    {open && <Popup setOpen={setOpen} />}
  </>
  )
}

export default Navbar