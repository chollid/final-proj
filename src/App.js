
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react'

import Login from './components/Login';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CovidDatacenter from './CovidDatacenter/CovidDatacenter';
import db from './firebase';
import { auth, provider } from './firebase';

import Arrow from './Assets/long-arrow-left.png';

function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const getChannels = () =>{
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null);
    })
  }

useEffect(() => {
  getChannels();
}, [])



  return (
    <div className="App">
      <Router>
        {
          !user ? 
          <Login setUser={setUser} />
          :
        <Container>
          <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/covid-datacenter">
                    <CovidDatacenter />
                  </Route>
                  <Route exact path="/">
                    <SelectChannel>
                      <img src={Arrow} alt="arrow" />
                      <h1>Select/Create a Channel, or go to the DataCenter</h1>
                    </SelectChannel>
                  </Route>
                </Switch>
            </Main>
        </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 38px minmax(0, 1fr);
`
const Main = styled.div`
  // background: blue;
  display: grid;
  grid-template-columns: 260px auto;
  `

const Bounce = keyframes`
  0% {left: 0;}
  50% {left: 100%;}
  100% {left: 0;}
`

const SelectChannel = styled.div`
display: flex;
justify-content: center;
align-items: center;
// max-width: 70%;
animation: ${Bounce} 3s infinite;

  h1 {
    font-weight: 700;
    margin-left: 17px;
  }
  img {
    height: 70px;
   
  
  }
`
