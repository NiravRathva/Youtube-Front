import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 2;
`;

const Recommandation = ({tags}) => 
{ const [videos, setVideos] = useState([]);

    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(`/videos/tags?tags=${tags}`);
        setVideos(res.data);
      };
      fetchVideos();
    }, [tags]);
  
    const navigates=()=>{
      console.log("working")
    }
  return (
    <Container>
    {videos.map((video) => (
      <Card onClick={navigates} type="small" key={video._id} video={video} />
    ))}
  </Container>
  )
}

export default Recommandation