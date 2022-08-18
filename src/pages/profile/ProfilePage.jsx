
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider';

const ProfilePage = ({ user, logged }) => {
    let navigate = useNavigate()
    const auth = useAuth()

    return (
        <div>
            ProfilePage
            < button
                onClick={() => {
                    auth.signout(() => navigate("/"))
                }}
            >
                Sign out
            </button >

        </div>

    )
}

export default ProfilePage