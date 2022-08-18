//aMaterial UI
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center" >
            {'Copyright ( C )'}
            <Link color="inherit">
                Saavedra Dev
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright