import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoutes = () => {
    const auth = useAuth();

    return (
        auth.user ? <Outlet /> : <Navigate to='/login' />
    )
}
export default PrivateRoutes