import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Test from "../Components/Shared/Test/Test";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/instructors",
                element: <Instructor></Instructor>,
            },
            {
                path: "/class",
                element: <Classes></Classes>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selected',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enroll',
                element: <EnrolledClasses></EnrolledClasses>
            },
        ]
    }
]);
