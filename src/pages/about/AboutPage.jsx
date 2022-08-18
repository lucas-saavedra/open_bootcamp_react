import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);
    return (
        <div>
            <button onClick={() => navigate('/')}>Go Home</button>
            <button onClick={() => navigate(-1)}> Go Back</button>
        </div >
    )
}

export default AboutPage