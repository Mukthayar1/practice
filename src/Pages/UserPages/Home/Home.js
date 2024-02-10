import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";



import Navbar from '../../../Component/Navbar/Navbar';
import MainLoading from '../../../Component/MainLoading/MainLoading';

const Home = () => {

    let history = useHistory();

    const [email, setEmial] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const UserLogin = () => {
        if (email && password) {
            try {
                setLoading(true)
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                fetch(`https://glyddeweb.azurewebsites.net/Api/User/Login?Email=${email}&Password=${password}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result[0]?.UserID) {
                            alert('Login');
                            // setPassword('');
                            // setEmial('');
                            history.push("/AddProducts");
                        } else {
                            alert('not Login')
                        }

                        setLoading(false);
                        console.log(result);
                    })
                    .catch(error => {
                        setLoading(false);
                        console.log('error', error)
                    });

            } catch (error) {
                console.log('error', error);
                setLoading(false)
            }
        }
    }


    return (
        <div>
            <Navbar title={'HOME-PAGE'} />

            <Form.Control size="lg" type="eamil" placeholder="enter email"
                value={email} onChange={(e) => setEmial(e.target.value)} />
            <br />
            <Form.Control size="lg" type="password" placeholder="enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button variant="primary" onClick={() => UserLogin()} disabled={loading}>Primary</Button>

            {loading && <MainLoading />}
        </div>
    )
};

export default Home;