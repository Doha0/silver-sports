import React from 'react';
import errorPage from '../../assets/Banner/404error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div  >
            <div className='flex justify-center items-center'>

                <img className='w-1/2' src={errorPage} alt="error" />


            </div >
            <div className='text-center'>
                <Link to='/' className="btn btn-wide bg-[#04D912] ">Back to Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;