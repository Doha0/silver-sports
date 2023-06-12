import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Components/Shared/Spinner/Spinner";
import useStu from "../../Hooks/useStu";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStu();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <Spinner></Spinner>;
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
