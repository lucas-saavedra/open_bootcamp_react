import { useEffect, useState } from 'react'
import { getalAllUsers, getAllPagedUsers, getUserDetails, postLogin } from '../../services/fetchService'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FetchExample = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(0);
    const [pages, setPages] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(0);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const users = await getalAllUsers()
            setUsers(users.data);
            setPages(users.total_pages);
            setTotalUsers(users.total);
            setUsersPerPage(users.per_page);
        } catch (error) {
            setError(error)
        }

    }
    const getPagedUsers = async (page) => {
        try {
            const users = await getAllPagedUsers(page);
            setUsers(users.data);
        } catch (error) {
            setError(error)
        }

    }
    const obtainUserDetails = async (id) => {
        try {
            const user = await getUserDetails(id);
            setUser(user.data);
        } catch (error) {
            setError(error)
        }
    }
    const handleLogin = async (payload = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }) => {
        try {
            const response = postLogin(payload);
            setToken(response.token)

            console.log(response.token)
        } catch (error) {
            setError(error)
        }

    }
    return (
        <div>
            <p>
                {error && error}
            </p>
            {users.map((user) => (
                <div key={user.id} >
                    {
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.first_name} {user.last_name}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button onClick={() => obtainUserDetails(user.id)} >Details </Button>
                            </CardActions>
                        </Card>

                    }

                </div>
            ))
            }
            <p>Showing {usersPerPage} of {totalUsers}</p>
            <button onClick={() => getPagedUsers(1)}>
                1
            </button>
            <button onClick={() => getPagedUsers(2)}>
                2
            </button>

            <div>
                {!user ? (
                    <p>No user</p>) :
                    (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={user.avatar}
                                alt="user_avatar"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.first_name} {user.last_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <p>{user.email}</p>
                            </CardActions>
                        </Card>
                    )
                }
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div >
    )
}

export default FetchExample