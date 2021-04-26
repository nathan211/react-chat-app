import React from 'react'

export default function Conversation({username, lastMessage}) {
    return (
        <div className='conversation'>
            <img className='conversation-picture' src='https://avatars.githubusercontent.com/u/57169886?s=400&u=1144d1d7c9706507be05b326f1a2c18d643ead7a&v=4' />
            <div className='title-container'>
                <p className='title'>Nathan211</p>
                <p className='sub-title'>hello there!</p>
            </div>
        </div>
    )
}
