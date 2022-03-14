import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import CryptoJS  from "crypto-js";
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();

    // useform hook
    
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        mode: "onTouched"
    });

    // get data from localstorage decrypted data

    const onSubmit = (data) => {
        console.log(data);
        const information = localStorage.getItem("data");
        const bytes = CryptoJS.AES.decrypt(information, 'secret key 123');
        const decryptData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptData);

        if((data.email == decryptData.email || data.email == decryptData.username) && (data.password == decryptData.password)){
            localStorage.setItem("flag", true);
            navigate("/dashboard");
        }
        else{
            alert("user is not valid");
        }
    }

    return (
        <div>
            <div className='col-md-4 mx-auto signin_class' >
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Username or Email</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.email })}
                            name='email'
                            {...register("email",
                                {
                                    required: "Username is required",
                                }
                            )}
                        />

                        {
                            errors.email && (
                                <div><small className='text-danger'>{errors.email.message}</small></div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.email })}
                            name='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                }
                            )}
                        />

                        {
                            errors.password && (
                                <div><small className='text-danger'>{errors.password.message}</small></div>
                            )
                        }
                    </div>

                    <button type='submit' style={{ width: "100%" }} className='btn btn-primary mt-3' >Login</button>
                </form>
            </div>

        </div>
    )
}

export default Signin