import styled from "styled-components"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import Comments from "../Components/Comments";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
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


const Video = () => {
  const { user } = useSelector((state) => state.user);
 
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

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




  return (
    <Container>
      <MainContent>
        <VideoWrapper>
          <iframe
            width="100%"
            height="420px"
            src="https://www.youtube.com/watch?v=1Ul0bnJfwlM"
          >

          </iframe>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>   {currentVideo.views} views • {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button><ThumbUpAltOutlinedIcon />Likes</Button>
            <Button> <ThumbDownOffAltOutlinedIcon />Dislikes</Button>
            <Button><ReplyOutlinedIcon />Share</Button>
            <Button><SaveAltOutlinedIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelSubscribers>200K subscribers</ChannelSubscribers>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
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