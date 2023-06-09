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
            <div className='text-center space-y-8 my-8 lg:my-16'>
                <h2 className='font-semibold text-4xl '>Our Instructors</h2>
                <p className='text-lg px-0 lg:px-60'>Sports instructors at Silver Sports Academy are dedicated professionals who possess in-depth knowledge and passion for their respective sports. They provide expert guidance, personalized training, and foster a positive learning environment.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mb-8'>
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