import React from 'react'

export default function FormButton(props) {
    return (
        <div id="button" class="row">
            <button>{props.title}</button>
        </div>
    )
}
