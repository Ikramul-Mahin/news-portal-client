import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';
const Register = () => {
    const { createUser, updateUserprofile, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const handleAccepted = (event) => {
        toast.success('success')
        setAccepted(event.target.checked)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const displayName = form.displayName.value
        const photoURL = form.photoURL.value
        console.log(email, password, displayName, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                toast.success('Please verify your email address!')

                handleUserProfile(displayName, photoURL)
                handleEmailVerification()
                form.reset()

            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    const handleUserProfile = (displayName, photoURL) => {
        const profile = {
            displayName: displayName,
            photoURL: photoURL
        }
        updateUserprofile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='displayName' placeholder="Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphotoURL">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Pgoto Url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckBox">
                    <Form.Check

                        type='checkbox'
                        onClick={handleAccepted}
                        label={<>Accept<Link to='/terms'>Terms and Condition</Link> </>}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted} >
                    Register
                </Button>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;