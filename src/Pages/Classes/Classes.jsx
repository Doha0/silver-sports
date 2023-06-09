import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ClassInfo from './ClassInfo';

const Classes = () => {

    const { data = [] } = useQuery({
        queryKey: [],
        queryFn: () =>
            axios
                .get("http://localhost:5000/class")
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                }),
    });

    return (
        <div>
            <div className='text-center space-y-8 my-8 lg:my-16'>
                <h2 className='font-semibold text-4xl '>Our Classes</h2>
                <p className='text-lg px-0 lg:px-60'>
                    Silver Sports Academy offers dynamic and engaging sports classes for individuals of all ages and skill levels. Our classes are led by experienced instructors who are passionate about their sports and dedicated to helping students reach their full potential.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mb-8'>
                {
                    data.map(classes => <ClassInfo
                        key={classes._id}
                        classes={classes}
                    ></ClassInfo>)
                }
            </div>
        </div>
    );
};

export default Classes;