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
import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import Feedback from "../Pages/Dashboard/AdminDashboard/ManageClasses/Feedback";
import InstructorRoute from "./InstructorRoute/InstructorRoute";
import AdminRoute from "./AdminRoute/AdminRoute";


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
            // student Route
            {
                path: 'selected',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enroll',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'checkout/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://silver-sport-server.vercel.app/payment/${params.id}`)
            },

            // instructor Route
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },

            // admin Route
            {
                path: 'manageclass',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "feedback/:id",
                element: <AdminRoute><Feedback></Feedback></AdminRoute>,
                loader: ({ params }) => fetch(`https://silver-sport-server.vercel.app/feedback/${params.id}`)
            },
        ]
    }
]);
