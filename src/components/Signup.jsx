import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import axios from 'axios';


function Signup(props) {

    const handleSignup = async (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.confirmPassword.value) {
            alert('You entered a wrong password');
            return;
        }

        const data = {
            username: e.target.userName.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            avatar: e.target.avatar.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
            country:e.target.country.value,
            city: e.target.city.value
        }

        try {
            await axios.post(`${process.env.REACT_APP_HEROKU_URI}/signup`, data).then((res) => {
                console.log(res.data)
                const user = {
                    username: res.data.user.username,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    avatar: res.data.user.avatar,
                    email: res.data.user.email,
                    password: res.data.user.password,
                    confirmPassword: res.data.user.confirmPassword,
                    country: res.data.user.country,
                    city: res.data.user.city,
                    userId: res.data.user.id,
                    points: res.data.user.points,
                    token: res.data.token
                }
                console.log(user)


                localStorage.getItem('token', localStorage.setItem('token', res.data.token));
                localStorage.setItem('username', JSON.stringify(res.data.user.username))
                localStorage.setItem('firstName', JSON.stringify(res.data.user.firstName))
                localStorage.setItem('lastName', JSON.stringify(res.data.user.lastName))
                localStorage.setItem('avatar', JSON.stringify(res.data.user.avatar))
                localStorage.setItem('city', JSON.stringify(res.data.user.city))
                localStorage.setItem('userId', JSON.stringify(res.data.user.userId))
                window.location.href='/signin'

            })
        } catch (error) {
            console.log(error)
        }



    }

    return (
        <>

            <h2>Sign up</h2>
            <Form onSubmit={handleSignup} >
                <Form.Group className="signin-signup" id="title">
                    <Form.Label className="label">User Name</Form.Label>
                    <Form.Control className="input" type="text" placeholder="User name ... " id="userName" autoComplete="username" required />
                </Form.Group>
                <Form.Group className="signin-signup" id="title">
                    <Form.Label className="label">First Name</Form.Label>
                    <Form.Control className="input" type="text" placeholder="First Name ... " id="firstName" autoComplete="username" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="title">
                    <Form.Label className="label">Last Name</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Last Name ... " id="lastName" autoComplete="username" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="title">
                    <Form.Label className="label">Avatar</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Avatar ... " id="avatar" autoComplete="username" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Email ..." id="email" autoComplete="email" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Password ..." id="password" autoComplete="new-password" minLength={8} required />
                </Form.Group>

                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Confirm Password</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Confirm password ..." id="confirmPassword" autoComplete="new-password" minLength={8} required />
                </Form.Group>
                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Country</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Country ..." id="country" required />
                </Form.Group>

                <Form.Group className="signin-signup" id="content">
                    <Form.Label className="label">Select Your city</Form.Label>
                    <Form.Select name='city'>
                        <option>Irbid</option>
                        <option>Amman</option>
                        <option>Salt</option>
                        <option>Ma'an</option>
                        <option>Petra</option>
                        <option>Aqapa</option>
                        <option>Jerash</option>
                        <option>Ajloun</option>
                        <option>Zarqa'a</option>
                        <option>Mafraq</option>
                        <option>Karak</option>
                        <option>Tafilah</option>
                    </Form.Select>
                </Form.Group>

                <Button className="signin-button" variant="outline-dark" type="submit">
                    Sign Up
                </Button>

                <p className="signin-p">Already Registered? <a href="/signin">Sign in</a></p>

            </Form>

        </>


    );
}

export default Signup;