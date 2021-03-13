import React from 'react'
import styled from 'styled-components';
import Logo from '../Assets/CovidLogo.png';
import Background from '../Assets/covidbackground.jpg';
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);

            
        })
        .catch((error) => {
            alert(error.message)
        })
    }


    return (
        <Container>
            <Content>
                <FitTrackrImage src={Logo} />
                <h1>Sign in</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign in With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`  
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #148E9D;
    background: -webkit-radial-gradient(center, #148E9D, #7F6980);
    background: -moz-radial-gradient(center, #148E9D, #7F6980);
    background: radial-gradient(ellipse at center, #148E9D, #7F6980);

`
const Content = styled.div` 
    background: white;
    padding: 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 6px -2px rgba(0,0,0,0.79);

   

`
const FitTrackrImage = styled.img`
    height: 100px;
    margin: 0 0 1.5rem 0;
    border-radius: 12px;
`
const SignInButton = styled.button`
    margin: 45px 0 0 0;
    background: #5C62AC;
    color: white;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;

    &:hover {
        box-shadow: 0px 2px 6px -2px rgba(0,0,0,0.79);
    }
`