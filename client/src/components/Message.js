import React from 'react'

export default function Message({text, isSentMessage}) {
    return (
        <>
            
            {   isSentMessage ?
                <div className='message sent'>
                    <p>{text}</p>
                </div> :
                <div className='message'>
                    <p>{text}</p>
                </div>  
            }
        </>
    )
}
