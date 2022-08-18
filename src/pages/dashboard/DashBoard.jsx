import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";

import Copyright from "../../components/pure/Copyright";
import MenuListItems from "../../components/MenuListItems";

import { Button } from "@mui/material";
import { useAuth } from "../../context/AuthProvider";

const DashBoard = () => {
    const auth = useAuth();
    let navigate = useNavigate();
    return (
        <>
            {/* <MenuListItems /> */}
            
            <Copyright />
            <Button
                variant="contained"
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Logout
            </Button>
            <Copyright />
        </>
    );
};

export default DashBoard;
