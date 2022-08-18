import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RedirectIfAuth = () => {
    const auth = useAuth();

    return (
        auth.user ? <Navigate to='/profile' /> : <Outlet />
    )
}
export default RedirectIfAuth