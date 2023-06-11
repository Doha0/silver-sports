import React from 'react';
import useStudent from '../../../Hooks/useStudent';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {

    const [student, refetch] = useStudent();

    // console.log(student);

    const handleDelete = (classes) => {
        fetch(`http://localhost:5000/students/${classes._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Class has been removed.',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <h2 className='font-semibold text-4xl text-center mb-8'>Selected Classes</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-sm'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Pay Now</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((classes, index) => <tr
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
                                <td className="">${classes.price}</td>
                                <td>
                                    <Link to={`/dashboard/checkout/${classes._id}`}><button className="btn btn-success bg-[#04D912]">Pay Now</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(classes)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;