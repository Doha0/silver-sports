import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const isAdmin = true;
    const isInstructor = true;

    return (


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#85F2AB]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {isAdmin || isInstructor ? (
                        isAdmin ? (
                            <p>Hello Admin</p>
                        ) : (
                            <p>Hello Instructor</p>
                        )
                    ) : (
                        <p>Hello User</p>
                    )}


                    <li><NavLink to="mydash">Dashboard Home</NavLink></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;