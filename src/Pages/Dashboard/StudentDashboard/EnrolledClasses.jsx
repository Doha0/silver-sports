import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const EnrolledClasses = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: student = [], refetch } = useQuery({
        queryKey: ['student', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enroll?email=${user?.email}`)
            // console.log(res.data)
            return res.data;
        }
    })

    return (
        <div className='ml-4 lg:ml-8'>
            <h2 className='font-semibold text-4xl text-center mb-8'>My Enrolled Classes</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-sm'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            
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
                                <td>
                                    {classes.instructor}
                                </td>

                                <td className="">${classes.price}</td>

                

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;