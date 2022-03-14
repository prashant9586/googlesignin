import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    const errorbtn = () => {
        navigate("/signin")
    }

    return (
        <div className='errorpage_maindiv'>
            <div className='err_sec'>
                <h1 className='err_text' >404</h1>
                <h1 className='err_msg'>WE ARE SORRY, PAGE NOT FOUND! </h1>
                <p>The page you are looking for might be deleted or temporarily unavilable</p>
                <button onClick={errorbtn} className='err_btn btn btn-primary' >Back to home</button>
            </div>
        </div>
    )
}

export default Error;