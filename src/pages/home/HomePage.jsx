import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            Home Page
            <button onClick={() => navigate('/profile')}>Go Profile</button>
            <button onClick={() => navigate(-1)}> Go Back</button>

        </div>

    )
}

export default HomePage