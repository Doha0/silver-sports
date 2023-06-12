import React from 'react';
import useClass from '../../../../Hooks/useClass';
import { Link } from 'react-router-dom';

const ManageClasses = () => {

    const [classes] = useClass();

    const handleStatus = () => {

    }

    return (
        <div>
            <h2 className='font-semibold text-4xl text-center mb-8'>Manage Classes</h2>

            <div className="overflow-x-auto w-full ml-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-sm'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classes, index) => <tr
                                key={classes._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="">
                                        <div className=" w-32 h-20">
                                            <img className='rounded-md' src={classes.class_image} alt="class" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classes.class_name}
                                </td>
                                <td>
                                    {classes.instructor}
                                </td>
                                <td>
                                    {classes.instructor_email}
                                </td>
                                <td className='text-center'>
                                    {classes.availableSeats}
                                </td>
                                <td className="">
                                    ${classes.price}
                                </td>
                                <td>
                                    <Link><button className={`btn btn-success bg-[#04D912] normal-case ${classes.status === "pending" ? " " : "btn-disabled"}`}>Approve</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleStatus(classes)} className="btn btn-error bg-red-600 normal-case">Deny</button>
                                </td>
                                <td>
                                    <button onClick={() => handleStatus(classes)} className="btn btn-info bg-blue-500 normal-case">Feedback</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;