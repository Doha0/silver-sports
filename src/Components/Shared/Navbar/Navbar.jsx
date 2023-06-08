import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instructors'>Instructors</Link></li>
            <li><Link to='/'>Classes</Link></li>
            {
                user ? <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    {user && <li>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </li>}
                    <button onClick={handleLogOut} className="btn">Log Out</button>
                </>
                    : <>
                        <Link to='/login' className='btn' >Login</Link>
                    </>
            }

        </>

    return (
        <div className="navbar bg-slate-950 text-white sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow sports-bg text-white rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Silver Sports</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {
                        navItems
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;