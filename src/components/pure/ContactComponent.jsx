import { userClass } from '../../models/userClass'
import PropTypes from "prop-types";
import "./../../styles/task.scss";
const ContactComponent = ({ user, togleConnection, deleteUser }) => {

    const userIsConnected = () => {
        if (user.connected) {
            return (
                <i
                    onClick={() => togleConnection(user)}
                    className="bi-toggle-on task-action"
                    style={{ color: "green", fontWeight: "bold" }}
                ></i>
            );
        }
        return (
            <i
                onClick={() => togleConnection(user)}
                className="bi-toggle-off task-action"
                style={{ color: "gray", fontWeight: "bold" }
                }
            ></i >
        );
    };

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{user.name}</span>
            </th>
            <td>
                <span className="align-middle">{user.lastname}</span>
            </td>
            <td>
                <span className="align-middle">{user.email}</span>
            </td>
            <td>
                <span className="align-middle">{userIsConnected()}</span>
            </td>
            <td>
                <i className="bi-trash task-action" onClick={() => deleteUser(user)} style={{ color: "red", fontSize: "20px" }}></i>
            </td>
        </tr>
    );
};
ContactComponent.propTypes = {
    user: PropTypes.instanceOf(userClass).isRequired,
    togleConnection: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
};

export default ContactComponent;
