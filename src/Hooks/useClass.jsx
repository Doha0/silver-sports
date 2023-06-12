import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useClass = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: () =>
            axios
                .get("https://silver-sport-server.vercel.app/class?approve=true")
                .then((res) => {
                    return res.data;
                }),
    });
    return [classes, refetch];
};

export default useClass;