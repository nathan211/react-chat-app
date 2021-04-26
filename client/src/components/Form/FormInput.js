import React from 'react'

export default function FormInput(props) {
    return (
        <div class="row">
            <label>{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
