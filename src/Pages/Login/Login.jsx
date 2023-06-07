import React, { useContext, useState } from 'react';
import loginBg from "../../assets/Banner/loginbg.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const [showPassword, setShowPassword] = useState('true');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { signIn } = useContext(AuthContext);

    const onSubmit = data => {
        // console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result?.user;
                // console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1000
                });
                // navigate(from, { replace: true });
            })
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="hero-overlay bg-opacity-10"></div>

            <div className="hero-content flex-col md:flex-row gap-x-8">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Login to Silver Sports</h1>
                    <p className="text-lg py-6">Welcome to Silver Sports Academy. Access your athlete account and unlock a world of opportunities. Achieve greatness with us!</p>
                </div>

                <div className="card lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                            <input type={showPassword ? "password" : "text"} name="password" {...register("password", { required: true, })} className="input input-bordered" />
                            <button className='absolute top-[47%] right-10' onClick={togglePassword}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                            {errors.password?.type === 'required' && <p className='text-red-600'>please enter correct password</p>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="sports-button" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='m-4 pl-4'><small>New to Silver Sports? <Link to="/register">Register</Link> </small></p>

                </div>


            </div>
        </div>
    );
};

export default Login;