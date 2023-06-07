import React, { useContext, useState } from 'react';
import loginBg from "../../assets/Banner/loginbg.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const [showPassword, setShowPassword] = useState('true');

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                updateUserProfile(data.name, data.PhotoURL);
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);    
            });
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="hero-overlay bg-opacity-10"></div>

            <div className="hero-content flex-col md:flex-row gap-x-8">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Register to Silver Sports</h1>
                    <p className="text-lg py-6">Welcome to Silver Sports Academy. Access your athlete account and unlock a world of opportunities. Achieve greatness with us!</p>
                </div>

                <div className="card lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "password" : "text"} name="password"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })
                                }
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'required' && <p className='text-red-600'>password is required</p>}
                            {errors.password?.type === 'minlength' && <p className='text-red-600'>Password have to be more than 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <button className='absolute top-[41%] right-10' onClick={togglePassword}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                        </div>

                        {/* Confirm password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type={showPassword ? "password" : "text"}
                                name="confirmPassword"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === watch('password') || "Passwords do not match"
                                })}
                                className="input input-bordered"
                            />
                            {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                        </div>

                        <button className="absolute top-[55%] right-10" onClick={togglePassword}>
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </button>

                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text"  {...register("PhotoURL", { required: true })} className="input input-bordered" />
                            {errors.PhotoURL && <span className='text-red-600'>PhotoURL is required</span>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="sports-button" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='m-4 pl-4'><small>Already Have an account? <Link to="/login">Login</Link> </small></p>

                </div>


            </div>
        </div>
    );
};

export default Register;