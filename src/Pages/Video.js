import styled from "styled-components"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "../Components/Comments";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { subscription } from "../Redux/UserSlice";
import { dislike, fetchSuccess, like } from "../Redux/videoSlice";
import { format } from "timeago.js";

const Container = styled.div`
display: flex;
gap: 10px;
`;
const MainContent = styled.div`
flex: 5;

`;
const VideoWrapper = styled.div`

`;
const Title = styled.h1`
font-size: 18px;
  font-weight: 400;
  margin-top: 5px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;
const Hr = styled.hr`
  margin: 10px 0px;
  border: 0.1px solid ${({ theme }) => theme.soft};
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 40px;
  height:40px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelSubscribers = styled.span`
  margin-top: 2px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 7px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  margin-top:5px;
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { user } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
    
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

 const handlelike=async()=>{
   await axios.put(`/users/like/${currentVideo._id}`)
   dispatch(like(user._id));
 };
 const handledislike=async()=>{
   await axios.put(`/users/dislike/${currentVideo._id}`)
   dispatch(dislike(user._id));
 };

 const handleSub = async () => {
  currentUser.subscribeduser.includes(channel._id)
    ? await axios.put(`/users/unsub/${channel._id}`)
    : await axios.put(`/users/sub/${channel._id}`);
  dispatch(subscription(channel._id));
};
  return (
    <Container>
      <MainContent>
        <VideoWrapper>
          <VideoFrame src="" controls />
        </VideoWrapper>
       
        <Title>{currentVideo.title}</Title>
        <Details>
       
          <Info>{currentVideo.views} views • {format(currentVideo.createdAt)} </Info>
          <Buttons>
            <Button onClick={handlelike}>
            {currentVideo.likes?.includes(user?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpAltOutlinedIcon />
              )}{" "}
              {currentVideo.likes?.length}</Button>

            <Button onClick={handledislike}>  {currentVideo.dislikes?.includes(user?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}</Button>
            <Button><ReplyOutlinedIcon />Share</Button>
            <Button><SaveAltOutlinedIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
            <ChannelName>{channel.name}</ChannelName>
              <ChannelSubscribers>{channel.subscribers} subscribers</ChannelSubscribers>
             
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {user.subscribeduser?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id}/>
      </MainContent>
      {/* <Recommendation>

        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
      </Recommendation> */}
    </Container>
  )
}

export default Video