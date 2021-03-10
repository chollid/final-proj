import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import '../Assets/fonts.css';


function Chat({ user }) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc) => doc.data());
            // console.log(messages)
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);

            // console.log(payload)
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data())
        })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>

                    <ChannelName>
                        # {channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        Announcements
                    </ChannelInfo>
                
                </Channel>
                <ChannelDetails>

                    <div>
                        Details
                    </div>
                    <Info />

                </ChannelDetails>
            </Header>
            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index) =>(
                        <ChatMessage 
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }

            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`
// Header
const Header = styled.div`
    padding: 5px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(83, 39, 83, .13)
`

const Channel = styled.div`

`
const ChannelName = styled.div`
    font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060
    font-size: 13px;
    margin: 8px 0 0 0;
`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #616060;

    div {
        font-family: 'PT Sans', sans-serif;
    }
`
const Info = styled(InfoIcon)`
    margin: 0 0 0 10px;
    
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll; 
`
