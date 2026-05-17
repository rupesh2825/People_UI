import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_BASE_URL = 'https://people-data-dzis.onrender.com';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    async function loginUser(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
            if (res.data.status === 'ok') {
                alert('Login successful');
                navigator('/home');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <h1 style={{fontSize:'55px', textAlign:'center', padding:'15px',fontWeight:'bold',color:'blueviolet'}}>PEOPLE.CO</h1>
            <section className='Login'>
                <Form className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={loginUser}>
                        Login
                    </Button>
                </Form>
            </section>
        </>
    )
}

export default Login;