import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import InstructorInfo from './InstructorInfo';

const Instructor = () => {

    const { data = [] } = useQuery({
        queryKey: [],
        queryFn: () =>
            axios
                .get("http://localhost:5000/instructors")
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                }),
    });


    return (
        <div>
            <h2>Total Instructors: {data.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8'>
                {
                    data.map(instructor => <InstructorInfo
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorInfo>)
                }
            </div>
        </div>
    );
};

export default Instructor;