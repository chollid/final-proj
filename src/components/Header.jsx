import React from 'react'
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AvatarImage from '../Assets/UserImage.svg';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Chris
                </Name>
                <UserImage>
                    <img className="avatar-image" src={AvatarImage} alt="User Profile" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #5e2231;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 4px 8px;
        color: white;
    }
    input:focus{
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px 0 0;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding: 0 16px 0 0;
`
const UserImage = styled.div`
    width: 25px;
    height: 25px;
    border: 2px solid white;
    border-radius: 4px;
    padding: 2.5px;
    

    .avatar-image {
        width: 100%;
        
    }

`