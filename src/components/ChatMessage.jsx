import React from 'react';
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="User" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span> - {new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>  
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin: 0 9px 0 0;

    img {
        width: 100%;
    }
`
const MessageContent = styled.div`
    
`
const Name = styled.div`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    padding-right: 10px;
    

    span {
        font-weight: 300;
        color: rgb(97,96,98)
        margin-left: 8px;
        font-size: 13px;
    }
`
const Text = styled.div`

`