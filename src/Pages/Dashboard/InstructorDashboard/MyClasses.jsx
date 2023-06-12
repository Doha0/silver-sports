import React from 'react';
import useClass from '../../../Hooks/useClass';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ["myClasses"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/course?email=${user?.email}`)
            // console.log(res.data);
            return res.data;
        }
    });

    // console.log(myClasses);

    const handleUpdate = (classes) => {

    }

    return (
        <div>
            <div className='text-center space-y-8 my-8 lg:my-16'>
                <h2 className='font-semibold text-4xl '>My Classes</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-sm'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((classes, index) => <tr
                                key={classes._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div>
                                        <div className="w-28 rounded-xl">
                                            <img className='rounded-md' src={classes.class_image} alt="class" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classes.class_name}
                                </td>
                                <td >
                                    ${classes.price}
                                </td>
                                <td className=" ">
                                    0
                                </td>
                                <td>
                                    <button className=" ">{classes.status}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate(classes)} className="btn btn-success bg-[#04D912]">Update</button>
                                </td>
                                <td>
                                    {classes?.feedback}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;