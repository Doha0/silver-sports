import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStu = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ["isStudent", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            return res.data.admin;
        },
    });
    return [isStudent, isStudentLoading];
};
export default useStu;