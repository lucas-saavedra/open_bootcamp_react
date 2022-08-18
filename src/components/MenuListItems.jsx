import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { Home, Settings, Task } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";

const icons = {
    HOME: () => <Home />,
    SETTINGS: () => <Settings />,
    TASK: () => <Task />,
};

const MenuListItems = ({ list }) => {
    let navigate = useNavigate();

    return (
        <List>
            {list.map(({ text, path, icon }, index) => (
                <ListItem key={index} button onClick={navigate(path)}>
                    <ListItemIcon >
                        {icons[`${icon}`]}
                    </ListItemIcon>
                    <ListItemText primary={text}>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
};
export default MenuListItems;
