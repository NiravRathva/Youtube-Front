import styled from "styled-components"
import { Link } from 'react-router-dom';
import {format} from "timeago.js"
import { useState,useEffect } from "react";

import axios from "axios"


const Container = styled.div`
width: ${(props) => props.type !== "small" && "270px"};
margin-bottom: ${(props) => (props.type === "small" ? "5px" : "25px")};
cursor: pointer;
display: ${(props) => props.type === "small" && "flex"};
gap:5px;
`;
const Image = styled.img`
height: ${(props) => (props.type === "small" ? "120px" : "160px")}; width:100%;
 background-color: #999;
flex:1;
 `;
const Details = styled.div`
 display: flex;
 margin-top: ${(props) => props.type !== "small" && "16px"};
gap: 10px;
flex:1; 
`;
const ChannelLogo = styled.img`
 width: 35px;
 height: 35px;
 border-radius: 50%;
 background-color: #999;
 display: ${(props) => props.type === "small" && "none"};
 `;

const Text = styled.div``;


const VideoTitle = styled.h1`
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h3`
font-size: 15px;
//  margin: ${(props) => props.type === "small" ?"0px" :"8px 0px"};

color: ${({ theme }) => theme.textsoft};
`;

const OtherInfo = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type,video}) => {

  const [videoChannel, setvideoChannel] = useState({})
  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setvideoChannel(res.data);
     
      
    };fetchChannel();
    
  }, [video.userId]);
  return (
    <Link to={`video/${video._id}`} style={{textDecoration:"none",color:"inherit"}} >
   
    <Container type={type}>

      <Image type={type}src={video.imgUrl} />

      <Details type={type}>
        <ChannelLogo type={type} src={videoChannel.img}/>
        <Text>
          <VideoTitle>{video.title}</VideoTitle>
          <ChannelName>{videoChannel.name}</ChannelName>
          <OtherInfo>{video.views} views {format(video.createdAt)}</OtherInfo>
        </Text>
      </Details>

    </Container>
    </Link>
    )
}

export default Card