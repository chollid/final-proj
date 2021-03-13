import React from 'react'
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {sidebarItems} from '../data/SidebarData';
import AddBoxIcon from '@material-ui/icons/AddBox';
import db from '../firebase';
import { useHistory, Link } from 'react-router-dom';

import BlurLinearIcon from '@material-ui/icons/BlurLinear';

function Sidebar(props) {

    const history = useHistory()

    const goToChannel = (id) => {
        if(id) {
            console.log(id);
            history.push(`/room/${id}`)
        }
    }

    const addRoom = () => {
        const promptName = prompt("Enter Room Name");
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Covid Resource Center
                </Name>
                <NewMessage>
                    <AddIcon />
                </NewMessage>
            </WorkspaceContainer>
            <Link to="/covid-datacenter">
                <MainChannels>
                    {
                        sidebarItems.map(item => (
                            <MainChannelItems>
                                <BlurLinearIcon />
                                <h3>Covid Data Center</h3>
                                {/* {item.icon}
                                {item.text} */}

                            </MainChannelItems>
                        ))
                    }
                    
                </MainChannels>
            </Link>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddBoxIcon onClick={addRoom}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                               # { item.name }
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
background: #6b2738;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 19px;
    border-bottom: 1px solid #7d3144;
`

const Name = styled.div`
   font-size: 1.1rem;
`

const NewMessage = styled.div`
    width: 31px;
    height: 31px;
    background: white;
    color: #6b2738;
    fill: #6b2738;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 22px 0 0;
    cursor: pointer;
`

const MainChannels = styled.div`
   
    padding: 1.6rem 0 1.6rem 0;
    // background: #7a3646;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 90%;
    margin: 3rem auto;

    &:hover {
        background: #39404d;
    
    }
   
`
const MainChannelItems = styled.div`
    // color: rgb(188,171,188);
    color: #2b2d33;
    display: grid;
    grid-template-columns: 15% auto;
    height: 3rem;
    align-items: center;
    padding: 1rem 0 1rem 19px;
    cursor: pointer;
    text-decoration: none;

    .MuiSvgIcon-root {
        // box-shadow: -2px 2px 4px 0px rgba(0,0,0,0.19)
        // box-shadow: -2px 2px 4px 0px rgba(58,58,58,0.19)
        // filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
        margin-left: -6px;
        filter: drop-shadow(-2px 6px 4px #000000);
        font-size: 2.5rem;
        color: #edf0fa;
    }
    h3 {
        margin-left: .5rem;
        filter: drop-shadow(-2px 1px 2px #e1e1e3);

        &:hover {
            color: #edf0fa;
            filter: drop-shadow(-2px 1px 2px #00000);
        }
    }

`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin: 10px 0 0 0;
   
    
    
`   
const NewChannelContainer = styled.div`
    display: flex;
   justify-content: space-between;
   align-items: center;
   height: 28px;
   padding: 0 12px 0 19px;
   margin: 4rem 0 0 0;

   div {
       cursor: pointer;
   }

   .MuiSvgIcon-root {
       cursor: pointer;
   }
`

const ChannelsList = styled.div`

`
const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 0 0 19px;
    cursor: pointer;
    :hover {
        background: #612332;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.32);
    }
`