import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CryptoJS  from "crypto-js";

const Dashboard = () => {
    const information = localStorage.getItem("data");
    const bytes = CryptoJS.AES.decrypt(information, 'secret key 123');
    const decryptData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptData);

    return (
        <div className='home_main'>
            <div className='home_sec'>
                {
                    information ? <h1 style={{ textTransform: "capitalize" }} >Welcome to {decryptData.username}</h1> : null
                }
            </div>
        </div>
    )
}

export default Dashboard;