import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {

    const { user } = useAuth();

    // const isAdmin = true;
    // const isInstructor = true;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-4 lg:mt-16 ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#85F2AB]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 h-full  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    
                    {isAdmin || isInstructor ? (
                        isAdmin ? (
                            // ----------admin------------
                            <>
                                <div className="avatar my-4">
                                    <div className="mx-auto w-24 rounded-xl">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <div className='mb-4'>Welcome, {user.displayName}</div>
                                <li><NavLink to="/dashboard/manageclass">Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>
                            </>
                        ) : (
                            // ----------Instructor------------
                            <>
                                <div className="avatar my-4">
                                    <div className="mx-auto w-24 rounded-xl">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <div className='mb-4'>Welcome, {user.displayName}</div>
                                <li><NavLink to="/dashboard/addaclass">Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/myclasses">My classes</NavLink></li>
                            </>
                        )
                    ) : (
                        // ----------student------------
                        <>
                            <div className="avatar my-4">
                                <div className="mx-auto w-24 rounded-xl">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <div className='mb-4'>Welcome, {user.displayName}</div>
                            <li><NavLink to="/dashboard/selected">Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/enroll">Enrolled classes</NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory">Payment History</NavLink></li>
                        </>
                    )}


                    <div className="divider"></div>
                    <li><NavLink to="/"> Home</NavLink> </li>
                    <li><NavLink to='/instructors'>Instructors</NavLink></li>
                    <li><NavLink to='/class'>Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;