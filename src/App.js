import styled from 'styled-components';
import './App.css';
import Menu from "./Components/Menu"
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme } from './Static/Theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Home from './Pages/Home';
import Video from './Pages/Video';
import Search from './Pages/Search';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SignIn from './Pages/SignIn';
import { Popup } from './Components/Popup';

const Container = styled.div`

`;
const Main = styled.div`

flex:10;



display:flex;
 background-color:${({ theme }) => theme.bg}
`;
const Nav = styled.div`position: sticky;
overflow: hidden;
`;

const Wrapper = styled.div`
flex:10;

padding:10px 10px`;

function App() {
  const [open, setOpen] = useState(false)
  const [darkmode, setdarkmode] = useState(true)

  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <Container>
          <Router>


            <Nav>
              <Navbar open={open} setOpen={setOpen} />
            </Nav>

            <Main open={open} setOpen={setOpen}>
              <Menu type="hide" darkmode={darkmode} setdarkmode={setdarkmode} />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random" />} />
                    <Route path='trending' element={<Home type="trending" />} />
                    <Route path='sub' element={<Home type="sub" />} />
                    <Route path="search" element={<Search />} />
                    <Route path="signin" element={<SignIn />} />


                  </Route>
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Routes>
              </Wrapper>
              {open && <Popup setOpen={setOpen} />}
            </Main>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
