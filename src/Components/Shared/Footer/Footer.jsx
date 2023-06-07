import React from 'react';
import logo from "../../../assets/running.png"

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { SiTwitter } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white grid justify-center'>
            <div className='p-10 lg:px-32 lg:pt-32 text-center'>
                <div className='flex justify-center items-center gap-x-5 mb-4'>
                    <img src={logo} alt="" className="w-12 h-12" />
                    <h2 className='text-2xl lg:text-5xl uppercase font-bold'>Silver Sports</h2>
                </div>
                <div className="px-4 lg:px-56 space-y-4">
                    <p>
                        Welcome to Silver Sports Academy, where athletic excellence thrives. We are dedicated to nurturing the skills of aspiring athletes, pushing them to reach new heights of performance. Join us at Silver Sports Academy.
                    </p>
                    <div className="py-6">
                        <div className="flex justify-center items-center gap-8">
                            <ImFacebook size={24}></ImFacebook>
                            <SiTwitter size={24}></SiTwitter>
                            <FaYoutube size={24}></FaYoutube>
                            <FaInstagram size={24}></FaInstagram>
                            <FaLinkedin size={24}></FaLinkedin>
                        </div>
                    </div>
                    <p className=''>
                        © 2023 Silver Sports Academy. All Rights Reserved.
                    </p>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12 px-10 py-4 text-lg bg-slate-950 text-white">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Address</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">About Us</a>
            </div>

        </footer >

    );
};

export default Footer;