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

            // instructor Route
            {
                path: 'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'checkout/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`)
            },
            // admin Route
            {
                path: 'manageclass',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "feedback/:id",
                element: <Feedback></Feedback>,
                loader: ({ params }) => fetch(`http://localhost:5000/feedback/${params.id}`)
            },
        ]
    }
]);
