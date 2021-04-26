import React from 'react'
import FormInput from './FormInput';
import FormButton from './FormButton';

export default function Form() {
    return (
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text" />
            <FormInput description="Password" placeholder="Enter your password" type="password" />
            <FormButton title="Log in" />
        </div>
    )
}
