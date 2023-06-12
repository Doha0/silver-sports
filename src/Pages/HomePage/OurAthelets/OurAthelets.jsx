import React from 'react';
import c1 from '../../../assets/c1.jpg'
import c2 from '../../../assets/c2.jpg'

const OurAthelets = () => {
    return (
        <div className='text-center mb-8'>
            <h2 className='font-semibold text-3xl py-6 mt-8'>Our Happy Clients</h2>
            <p className='py-6  text-xl'>Silver Sports continues to be a trusted and influential player in the sports industry.</p>

            <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
                <div className="card w-10/12 bg-orange-50 shadow-xl">
                    <div className="avatar flex justify-center px-10 pt-10">
                        <div className="w-24 rounded-full">
                            <img src={c1} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title pb-4">James Wilson</h2>
                        <p>In addition to their exceptional product offerings, Silver Sports also promotes an active and healthy lifestyle through their community engagement initiatives. They organize sports clinics, workshops, and events to encourage participation, skill development, and camaraderie among sports enthusiasts of all ages.</p>
                    </div>
                </div>
                <div className="card w-10/12 bg-orange-50 shadow-xl">
                    <div className="avatar flex justify-center px-10 pt-10">
                        <div className="w-24 rounded-full">
                            <img src={c2} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title pb-4">Sam Billings</h2>
                        <p>Silver Sports is a leading provider of athletic equipment and gear, catering to a wide range of sports enthusiasts. With a commitment to quality and innovation, Silver Sports offers a diverse selection of products designed to enhance performance and ensure safety.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurAthelets;