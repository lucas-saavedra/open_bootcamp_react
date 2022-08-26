// * Ejercicio sesiones 19, 20 y 21


import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { axiosLogin } from "../../services/axiosService";

const Login = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    const authUser = async () => {
        try {
            setLoading(true)
            const result = await axiosLogin("eve.holt@reqres.in", "cityslicka");
            sessionStorage.setItem('token', result.token)
            setLoading(false)
           
        } catch (error) {
            setError(error);
        }
    };


    return (
        <><p className="bg-danger text-dark" >
            {error && error.message}
        </p>

            <button onClick={authUser} disabled={loading} >{loading ? 'Loading....' : 'Login'}</button>
            {sessionStorage.getItem('token') ? sessionStorage.getItem('token') : <p>Not logged</p>}

        </>
    );
};

export default Login;
