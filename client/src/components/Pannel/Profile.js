import React, { Fragment, useEffect, useState } from 'react'
import './Scss/Profile.scss'
import MainPannel from './MainPannel'
import Navigation from '../Navigation'
import { AiOutlineUser } from 'react-icons/ai'
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Redux/actions/userActions";
const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const user = useSelector(state => state.UserLogin?.userInfo)
    useEffect(() => {
        setName(user?.name);
        setEmail(user?.email);
    }, []);
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateProfile({ name, email, password, user: user._id }));

            setMessage("Profile updated successfully");
        } catch (error) {
            setMessage(`Failed to update profile: ${error.message}`);
        }
    };
    return (
        <Fragment>
            <Navigation />
            <div className='profile-parent'>
                <div>
                    <MainPannel />
                </div>
                <div>
                    <Container>
                        <h1>Update Profile</h1>
                        {message && <p>{message}</p>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update Profile
                            </Button>
                        </Form>
                    </Container>
                </div>

            </div>
        </Fragment>
    )
}

export default Profile
