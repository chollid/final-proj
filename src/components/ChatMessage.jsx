import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase';
import { useParams } from 'react-router-dom';



    // const deleteMessage = (e) => {
    //     setMessageToDelete(prevMessage => {
    //         return {...prevState, //function}

    //     })  Maybe useEffect call to delete on Firestore?
    // }

    // OR

    // let channelId = useParams();
    // const [input, setInput] = useState()

    // const deleteMessage = (e) => {
    //     e.preventDefault();


    //     console.log(e)

    //     if(channelId)
    //     db.collection("rooms").doc(channelId).collection('messages').delete()

    //     setInput("")
    // }

function ChatMessage({ text, name, image, timestamp}) {

    let { channelId } = useParams();
    const [messageToDelete, setMessageToDelete] = useState("") //should be current message. Function use makes sure it runs once inside useState

    // const deleteMessage = (e) => {
        // const messageDelete = e.target.value
        // const messageDelete = () => {
        //     _collectionReference.snapshots().forEach((element) {
        //         for (QueryDocumentSnapshot snapshot in element.docs) {
        //           snapshot.reference.delete();
        //         }
        //       });
            // db.collection('rooms')
            // .doc(channelId)
            // .collection('messages').delete();
            // *******
           let messageDelete = () => { 
            db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .getDocuments()
            .then((snapshot) {
                for (DocumentSnapshot doc in snapshot.documents){
                    doc.reference.delete();
                }
            })
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                // console.log(messages)
                setMessages(messages);
            })
        }
            
            
            
            
            
        //     db.collection('rooms')
        //    .doc(channelId)
        //    db.collection('messages').getDocuments().then((snapshot) {
        //         for (DocumentSnapshot doc in snapshot.documents){
        //           doc.reference.delete();
        //         });
        //       });
        //     }
        // console.log('YOOOOOOO >>>>>', messageDelete);

         setMessageToDelete(messageDelete) //**Set state to empty message
    

   
    

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
                    // onClick={deleteMessage} ** OR** onClick={setDeleteMessage( #code to delete from firestore#)}
                    // onClick={messageDelete}
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