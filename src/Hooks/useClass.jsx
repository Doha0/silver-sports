import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useClass = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: () =>
            axios
                .get("http://localhost:5000/class?approve=true")
                .then((res) => {
                    // console.log(res.data);
                    return res.data;
                }),
    });
    return [classes, refetch];
};

export default useClass;