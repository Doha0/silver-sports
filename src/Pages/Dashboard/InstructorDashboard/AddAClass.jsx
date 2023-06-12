import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddAClass = () => {

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.status = "pending";
        // console.log(data);

        fetch('https://silver-sport-server.vercel.app/class', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div>
            <div className='text-center space-y-8 my-8 lg:my-16'>
                <h2 className='font-semibold text-4xl '>Add a Class</h2>
            </div>

            <div className='p-0 lg:pl-8'>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    {/* ClassName */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("class_name", { required: true })} className="input input-bordered" />
                        {errors.class_name && <span className='text-red-600'>Class Name is required</span>}
                    </div>
                    {/* class_image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" {...register("class_image", { required: true })} className="input input-bordered" />
                        {errors.class_image && <span className='text-red-600'>Class Image is required</span>}
                    </div>
                    {/* Instructor Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" value={user.displayName} {...register("instructor", { required: true })} className="input input-bordered" />
                    </div>

                    {/* Instructor email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" value={user.email} {...register("instructor_email", { required: true })} className="input input-bordered" />

                    </div>
                    {/* Available Seats */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" {...register("availableSeats", { required: true })} className="input input-bordered" />
                        {errors.availableSeats && <span className='text-red-600'>Available Seats is required</span>}
                    </div>
                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} className="input input-bordered" />
                        {errors.price && <span className='text-red-600'>Price is required</span>}
                    </div>

                    <div className="form-control mt-6 lg:col-span-2">
                        <input className="sports-button" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddAClass;