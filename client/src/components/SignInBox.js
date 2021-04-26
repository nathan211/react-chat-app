import React from 'react';

import Form from '../components/Form/Form';
import FormHeader from '../components/Form/FormHeader';


const OtherMethods = props => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
);

const Google = props => (
    <a href="#" id="googleIcon"></a>
);

const submitHandler = () => {
    console.log('submited');
}


export default function SignInBox() {
    return (
        <div id="loginform">
            <FormHeader title="Login" />
            <Form onSubmit={submitHandler} />
            <OtherMethods />
        </div>
    )
}
