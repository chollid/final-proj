import React, { useState } from 'react'
import styled from 'styled-components';

import SendRoundedIcon from '@material-ui/icons/SendRounded';



function ChatInput( {sendMessage} ) {

    const [input, setInput] = useState("")

    const send = (e) => {
        e.preventDefault();

        if(!input) return;

        sendMessage(input)

        setInput("")
    }

    return (
        <Container>
            <InputContainer>
            <form>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input}
                    placeholder="Message here..." />
                <SendButton  
                    type="submit"
                    onClick={send}>
                    <Send />
                </SendButton>
            </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
    padding: 0 20px 24px 20px;
  
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    &:hover {
        border: 2px solid #4dd69f;
        border-radius: 8px;
        caret-color: #4dd69f;
        box-shadow: -2px 2px 4px 0px rgba(0,0,0,0.19)
    }
 
    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding: 0 0 0 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
       
        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background: #4dd69f;
    border-radius: 2px;
    margin: 0 5px 0 0;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
       
    }

    :hover {
        background: #63ebb4;
        box-shadow: -3px 2px 4px 0px rgba(0,0,0,0.43);
        cursor: pointer;
    }

`
const Send = styled(SendRoundedIcon)`
    color: #182b24;
`