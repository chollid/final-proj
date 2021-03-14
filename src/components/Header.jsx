import React from 'react'
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import AvatarImage from '../Assets/UserImage.svg';

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                {/* <AccessTimeIcon /> */}
                <SearchContainer>
                    {/* <Search>
                        <input type="text" placeholder="Search..." />
                    </Search> */}
                </SearchContainer>
                {/* <HelpOutlineIcon /> */}
            </Main>
            <UserContainer>
                <h4>Logged in as </h4>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt="User"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 41px;
    // background: #6b2738;
    background: rgba( 217, 132, 132, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`
const Main = styled.div`
    display: flex;
    margin: 0 16px;
    // border: 2px solid white;
`

const SearchContainer = styled.div`
    min-width: 400px;
    // border: 3px solid white;
    margin: 0 16px;
`

// const Search = styled.div`
//     box-shadow: inset 0 0 0 1px rgb(104 74 104);
//     border-radius: 6px;
//     width: 100%;
//     display: flex;
//     align-items: center;

//     input {
//         background-color: transparent;
//         border: none;
//         width: 100%;
//         padding: 4px 8px;
//         color: white;
//     }
//     input:focus{
//         outline: none;
//     }
// `

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px 0 0;
    position: absolute;
    right: 0;
    color: #363636;
     
    h4 {
        margin: 0 1rem 0 0;
    }
`

const Name = styled.div`
    padding: 0 16px 0 0;
`
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 4px;
    cursor: pointer;
    
    img {
        width: 100%;
    }

`