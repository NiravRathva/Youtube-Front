import styled from 'styled-components';
import './App.css';
import Menu from "./Components/Menu"
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme } from './Static/Theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Home from './Pages/Home';
import Video from './Pages/Video';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SignIn from './Pages/SignIn';


const Container = styled.div`
display:flex;
`;
const Main = styled.div`
flex:10;
 background-color:${({ theme }) => theme.bg}
`;
const Wrapper = styled.div`
padding:10px 10px`;

function App() {

  const [darkmode, setdarkmode] = useState(false)
  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <Container>
          <Router>
            <Menu darkmode={darkmode} setdarkmode={setdarkmode} />

            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random"/>} />
                    <Route path='trending' element={<Home type="trending" />} />
                    <Route path='sub' element={<Home type="sub"/>} />
                    <Route path="signin" element={<SignIn />} />

                    <Route path=":id" element={<Video />} />
                  </Route>

                </Routes>
              </Wrapper>
            </Main>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
