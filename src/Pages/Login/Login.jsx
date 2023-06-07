import React from 'react';
import loginBg from "../../assets/Banner/loginbg.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

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
                            <input type="password" name="password"
                                {...register("password", { required: true, })}
                                 className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <input className="sports-button" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='m-4 pl-4'><small>Already Have an account? <Link to="/">Register</Link> </small></p>

                </div>


            </div>
        </div>
    );
};

export default Login;