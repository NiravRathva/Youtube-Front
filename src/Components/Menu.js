import styled from 'styled-components'
import logo from "../Static/Images/Youtube.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout } from "../Redux/UserSlice";
import { useDispatch } from "react-redux"

const Container = styled.div`
flex:2;
   background-color:${({ theme }) => theme.bg};
   height:fit-content;
   color:${({ theme }) => theme.text};
   font-size:14px;
     position: sticky;
top: 12px;

margin-left:0px;



`;
const Wrapper = styled.div`
  padding:0px 26px;
 

`;

const Item = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
font:size:20px;
font-weight:bold;

padding:8px;

`;
const Hr = styled.div`
  margin:5px 0px;
  border:0.1px solid ${({ theme }) => theme.soft};
`;



const Login = styled.div`



`;
const Button = styled.div`
padding:5px 0px;
background-color:tranparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:5px;
font-weight:bold;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
    gap: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Menu = ({ darkmode, setdarkmode }) => {
    const dispatch=useDispatch();
    const handlelogout=()=>{
        dispatch(logout())
    }
  
   
   
    const { user } = useSelector((state) => state.user);
    return (

        <Container>

            <Wrapper id="items">
                
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HomeOutlinedIcon />
                        Home
                    </Item>
                </Link>
                <Link to="trending" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <ExploreOutlinedIcon />
                        Explore
                    </Item>
                </Link>
                <Link to="sub" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <SubscriptionsOutlinedIcon />
                        Subscription
                    </Item>
                </Link>
                <Hr />
                <Item>
                    <LibraryAddCheckOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                {!user &&
                    <>
                        <Login>
                            Sign in to like videos,comment and subscribe.
                            <Link to="signin" style={{ textDecoration: "none", color: "inherit" }}>
                                <Button>
                                    <AccountCircleOutlinedIcon /> SIGN IN
                                </Button>
                            </Link>
                        </Login>
                        <Hr />
                    </>}
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <FeedOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <OutlinedFlagIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setdarkmode(!darkmode)}>
                    {darkmode?<LightModeOutlinedIcon/>:<DarkModeOutlinedIcon/>}
                    {darkmode?"Lightmode":"Darkmode"}
                </Item>
                <Item onClick={handlelogout}>
                  { user &&<><LogoutOutlinedIcon/>
                     logout
                     </>}
                </Item>
            </Wrapper>
        </Container>
    )
}


export default Menu