import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import base64 from 'base-64';
import axios from 'axios';
function Signin(props) {

    const handleSignin = async (e) => {
        e.preventDefault();
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        const encoded = base64.encode(`${userData.username}:${userData.password}`);
        console.log(encoded)
        try {
            await axios.post(`${process.env.REACT_APP_HEROKU_URI}/signin`, {},
                {
                    headers: {
                        Authorization: `Basic ${encoded}`,
                    },
                }
            ).then((res) => {
                const user = {
                    token: res.data.token,
                    username: res.data.user.username,
                    items: res.data.user.items,
                    city: res.data.user.city,
                    userId: res.data.user.id,
                    avatar: res.data.user.avatar
                }
                console.log(user)
                localStorage.getItem('token', localStorage.setItem('token', res.data.token));
                localStorage.setItem('username', JSON.stringify(res.data.user.username))
                localStorage.setItem('items', JSON.stringify(res.data.user.items))
                localStorage.setItem('avatar', JSON.stringify(res.data.user.avatar))
                localStorage.setItem('city', JSON.stringify(res.data.user.city))
                localStorage.setItem('userId', JSON.stringify(res.data.user.id))
                console.log(res.data.user)
                props.chechAuth();

            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Sign In</h2>
            <Form onSubmit={handleSignin} >

                <Form.Group className="signin-signup" id="title">
                    <Form.Label className="label">User Name</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Email ..." id="username" autoComplete="username" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Password ..." id="password" autoComplete="new-password" minLength={8} required />
                </Form.Group>

                <Button className="signin-button" variant="outline-dark" type="submit">
                    Sign In
                </Button>

                <p className="signin-p" > Don't have an account? Join us here! <a href="/signup">Sign up now</a></p>

            </Form>

        </>
    );
}

export default Signin;