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
import { getRandomJoke } from "../../services/axiosService";

const ChuckJokes = () => {
    const [joke, setJoke] = useState({});
    const [error, setError] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    useEffect(() => {
        obtainRandomJoke();
    }, []);

    const obtainRandomJoke = async () => {
        try {
            const joke = await getRandomJoke();
            setJoke(joke.data);
        } catch (error) {
            setError(error);
        }
    };
    const likeJoke = async () => {
        setLike(like + 1);
        obtainRandomJoke();
    };
    const dislikeJoke = async () => {
        setDislike(dislike + 1);
        obtainRandomJoke();
    };

    return (
        <div
            className="bg-dark d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <p>{error && error}</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="text.secondary"
                    >
                        {joke.value}
                    </Typography>
                </CardContent>
                <CardActions
                    color="info"
                    className=" d-flex justify-content-around align-center"
                >
                    <IconButton aria-label="ThumbUp" onClick={likeJoke}>
                        <ThumbUpOffAltIcon fontSize="16rem" color="primary" />
                        {like}
                    </IconButton>

                    <IconButton aria-label="ThumbUp" onClick={dislikeJoke}>
                        <ThumbDownOffAltIcon fontSize="16rem" color="error" />
                        {dislike}
                    </IconButton>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={obtainRandomJoke}
                    >
                        Other joke
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ChuckJokes;
