import React from 'react';

const InstructorInfo = ({ instructor }) => {

    const { image, name, email } = instructor;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default InstructorInfo;