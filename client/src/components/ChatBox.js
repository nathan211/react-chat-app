import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Conversation from './Conversation';
import Message from './Message';

const dummyData = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: false,
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        isSentMessage: true,
    },
    {
        text: 'Lorem ipsum dolor ',
        isSentMessage: true,
    },

]

export default function ChatBox() {
    const history = useHistory();
    const handleLogOut = () => {
        history.push('/');
    }

    useEffect(() => {
        const abc = document.getElementById('message-container');
        const height = abc.scrollHeight;
        abc.scrollTop = height;
    }, [])
    return (
        <div className='chat-box-container' id='chat-app'>
            <div className='conversation-container'>
                <div className='profile-container'>
                    <img className='profile-picture' src='https://avatars.githubusercontent.com/u/57169886?s=400&u=1144d1d7c9706507be05b326f1a2c18d643ead7a&v=4' />
                    <p className='username'>@Nathan211</p>
                </div>

                <div className='sidebar-body'>
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                    <Conversation
                        username='Nathan'
                        lastMessage='Hello there!'
                    />
                </div>
                <div className='sidebar-footer'>
                    <button className='btn-signout' onClick={handleLogOut}>
                        {/* <Link className='btn-signout-link' to="/">Sign out</Link> */}
                        Sign out
                    </button>

                </div>
            </div>
            <div className='message-container'>
                <div className='user-information-container'>
                    <img className='conversation-picture' src='https://avatars.githubusercontent.com/u/57169886?s=400&u=1144d1d7c9706507be05b326f1a2c18d643ead7a&v=4' />
                    <p className='title'>Nathan211</p>
                </div>
                <div className='messages' id='message-container'>
                    {
                        dummyData.map((item, index) => (
                            <Message
                                text={item.text}
                                isSentMessage={item.isSentMessage}
                            />
                        ))
                    }
                </div>
                <form className="chat-form">
                    <input
                        className="input-chat"
                        type="text"
                        placeholder="Enter Message"
                        autocomplete="off"
                    />
                    <button class="btn-send"><i class="fas fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div>
    )
}
