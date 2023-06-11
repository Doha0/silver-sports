import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: student = [], refetch } = useQuery({
        queryKey: ['student', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/history?email=${user?.email}`)
            // console.log(res.data)
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='font-semibold text-4xl text-center mb-8'>Payment History</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-sm'>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Payment Status</th>
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
                                    {classes.class_name}
                                </td>
                                <td>
                                    {classes.transactionId}
                                </td>

                                <td className="">${classes.price}</td>

                                <td>{new Date(classes.date).toLocaleString()}</td>

                                <td>{classes.payment ? "Paid" : "Not Paid"}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;