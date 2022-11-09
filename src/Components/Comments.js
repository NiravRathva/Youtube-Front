import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Comment from './Comment';
import { useState, useEffect } from "react";

const Container = styled.div``;
const NewComment = styled.div`
display: flex;
align-items: center;
gap:10px;
`;
const ChannelLogo = styled.img` 
width: 40px;
height:40px;
border-radius: 50%;
`;
const Input = styled.input`
width: 100%;
border: none;
outline: none;
padding: 10px 5px;
border-bottom: 1px solid ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.text};
background-color: transparent;
border-radius: 5px;
`;
const Comments = ({videoId}) => {
  const { user } = useSelector((state) => state.user)
  const [comments, setcomments] = useState([])

  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const response = await axios.get(`/comments/${videoId}`);
        setcomments(response.data)
      } catch (error) {

      }
    }
    fetchcomments();
  }, [videoId])

  return (
    <Container>
      <NewComment>
        <ChannelLogo src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
        <Input placeholder='Add new comment' />
      </NewComment>
      {comments.map((comment)=>(
      <Comment key={comment._id} comment={comment}/>
      ))}
      
      

    </Container>)
}

export default Comments