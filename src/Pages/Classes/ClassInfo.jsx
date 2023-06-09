import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ClassInfo = ({ classes }) => {

    const { user } = useContext(AuthContext);
    const { _id, class_image, class_name, instructor, availableSeats, price } = classes;


    const handelAddClass = (classes) => {
        // console.log(classes);
        if (user) {
            const classInfo = { ClassId: _id, class_name: class_name, class_image: class_image, instructor: instructor, availableSeats: availableSeats, price: price, email: user.email }
            fetch('http://localhost:5000/students', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(classInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'You have enrolled in the class.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classes.class_image} alt="class" /></figure>
            <div className="card-body">
                <div className="card-actions justify-between">
                    <div className="badge bg-[#0540F2] text-white  p-4">Available Seats: {classes.availableSeats}</div>
                    <div className="badge bg-[#0540F2] text-white  p-4">${classes.price}</div>
                </div>
                <h2 className="card-title">
                    {classes.class_name}
                </h2>
                <p>{classes.instructor}</p>
                <button onClick={() => handelAddClass(classes)}
                    className="btn btn-success bg-[#04D912]"
                >Enroll Now</button>
            </div>
        </div>
    );
};

export default ClassInfo;