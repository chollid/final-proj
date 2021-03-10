import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase';
import { useParams } from 'react-router-dom';

function ChatMessage({ text, name, image, timestamp}) {

    // let channelId = useParams();
    // const [input, setInput] = useState()

    // const deleteMessage = (e) => {
    //     e.preventDefault();


    //     console.log(e)

    //     if(channelId)
    //     db.collection("rooms").doc(channelId).collection('messages').delete()

    //     setInput("")
    // }



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
                <DeletButton
                    // onClick={deleteMessage}
                >
                    Delete
                </DeletButton>
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

font-family: 'PT Sans', sans-serif;
    
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
const DeletButton = styled.button`
    font-size: .6rem;
    color: #f8f8f8;
    background: #d92146;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.19);
`