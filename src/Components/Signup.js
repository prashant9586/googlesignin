import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import CryptoJS  from "crypto-js";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    // useform hook

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        mode: "onTouched"
    });

    // store data in localstorage with encrypted data

    const onSubmit = (data) => {
        console.log(data);
        const encryptData = CryptoJS.AES.encrypt(JSON.stringify(data),'secret key 123').toString();
        localStorage.setItem("data",encryptData);
        localStorage.setItem("flag", false);
        navigate("/signin");
    }

    return (
        <>
            <div className='col-md-5 mx-auto mt-2 signup_class' >
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.email })}
                            name='email'
                            {...register("email",
                                {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i,
                                        message: "Email is invalid"
                                    }
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
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.username })}
                            name='username'
                            {...register("username",
                                {
                                    required: "username is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum length should be 3"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Maximum length sould be 10"
                                    }
                                }
                            )}
                        />

                        {
                            errors.username && (
                                <div><small className='text-danger'>{errors.username.message}</small></div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.password })}
                            name='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                        message: "Password is invalid"
                                    },
                                }
                            )}
                        />

                        {
                            errors.password && (
                                <div><small className='text-danger'>{errors.password.message}</small></div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">ConfirmPassword</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.confirmpassword })}
                            name='confirmpassword'
                            {...register("confirmpassword",
                                {
                                    required: "ConfirmPassword is required",
                                    validate: value => value === getValues("password") || "Password doesn't match"
                                }
                            )}
                        />
                        {
                            errors.confirmpassword && (
                                <div><small className='text-danger'>{errors.confirmpassword.message}</small></div>
                            )

                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.phone })}
                            name='phone'
                            {...register("phone",
                                {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^[7-9][0-9]{0,9}$/,
                                        message: "Phone is invalid",
                                    }
                                }
                            )}
                        />

                        {
                            errors.phone && (
                                <div><small className='text-danger'>{errors.phone.message}</small></div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">State</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.state })}
                            name='state'
                            {...register("state",
                                {
                                    required: "state is required",
                                }
                            )}
                        />

                        {
                            errors.state && (
                                <div><small className='text-danger'>{errors.state.message}</small></div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">City</label>
                        <input type="text"
                            autoComplete='off'
                            className={classNames("form-control", { "is-invalid": errors.city })}
                            name='city'
                            {...register("city",
                                {
                                    required: "city is required",
                                }
                            )}
                        />

                        {
                            errors.city && (
                                <div><small className='text-danger'>{errors.city.message}</small></div>
                            )
                        }
                    </div>

                    <button type='submit' style={{ width: "100%" }} className='btn btn-primary mt-3' >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup;
