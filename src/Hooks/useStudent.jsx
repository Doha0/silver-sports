import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: student = [], refetch } = useQuery({
        queryKey: ['student', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/students?email=${user?.email}`)
            // console.log(res.data)
            return res.data;
        }
    })

    return [student, refetch];
};

export default useStudent;