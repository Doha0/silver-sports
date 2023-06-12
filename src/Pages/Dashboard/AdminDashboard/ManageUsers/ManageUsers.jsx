import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            axiosSecure
                .get("https://silver-sport-server.vercel.app/users")
                .then((res) => {
                    return res.data;
                }),
    });

    const handleRole = (email, role) => {
        fetch(
            `https://silver-sport-server.vercel.app/users/role?email=${email}&role=${role}`,
            {
                method: "PATCH",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'role added success',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

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
                            <th>User Name</th>
                            <th>Role</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16">
                                            <img className='rounded-md' src={user.photo} alt="class" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.role}
                                </td>

                                <td className="py-4 px-6">
                                    <button
                                        className={` py-2 px-4 rounded ${user.role === "instructor"
                                            ? "btn-disabled my-btn-disabled "
                                            : "bg-orange-600 hover:bg-orange-700 text-white"
                                            }`}
                                        onClick={() => handleRole(user.email, "instructor")}
                                    >
                                        Instructor
                                    </button>
                                </td>
                                <td className="py-4 px-6">
                                    <button
                                        className={` py-2 px-4 rounded ${user.role === "admin"
                                            ? "btn-disabled text-gray-500"
                                            : "bg-lime-400 hover:bg-lime-500 text-white"
                                            }`}
                                        onClick={() => handleRole(user.email, "admin")}
                                    >
                                        Admin
                                    </button>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;