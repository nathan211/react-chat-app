import React from 'react'

export default function FormButton({ title, onClick }) {
    return (
        <div id="button" className="row">
            <button onClick={onClick}>{title}</button>
        </div>
    )
}
