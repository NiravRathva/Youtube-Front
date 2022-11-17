import axios from 'axios';
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
const Button = styled.div`
background-color:${({ theme }) => theme.btn};
display: flex;
padding: 10px 15px;
border-radius:10px ;cursor: pointer;
color:white;
border: none;
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
const Comments = ({ videoId }) => {
  const { user } = useSelector((state) => state.user)
  const [comments, setcomments] = useState([])
  const [desc, setDesc] = useState({
    desc:""
  })
  
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
  const handleDesc = (e) => {
    setDesc((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }
  const addComment = async (e) => {
    console.log("clicked")
    e.preventDefault();
    if (user) {
      console.log("in")
      
      const res = await axios.post("http://localhost:8000/api/comments", { ...desc, videoId })
    }

  }
  return (
    <Container>
      <NewComment>
        <ChannelLogo src={user.img} />
        <Input onChange={handleDesc} placeholder='Add new comment' />
        <Button onClick={addComment}>Comment</Button>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}



    </Container>)
}

export default Comments