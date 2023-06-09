import React from 'react';

const ClassInfo = ({ classes }) => {

    const { class_image, class_name, instructor, availableSeats, price } = classes;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={class_image} alt="class" /></figure>
            <div className="card-body">
                <div className="card-actions justify-between">
                    <div className="badge bg-[#0540F2] text-white  p-4">Available Seats: {availableSeats}</div>
                    <div className="badge bg-[#0540F2] text-white  p-4">${price}</div>
                </div>
                <h2 className="card-title">
                    {class_name}
                </h2>
                <p>{instructor}</p>
                <button className="btn btn-success bg-[#04D912]">Enroll Now</button>
            </div>
        </div>
    );
};

export default ClassInfo;