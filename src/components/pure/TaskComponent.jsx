import { taskClass } from "../../models/task.class";
import PropTypes from "prop-types";
import "./../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";
import { useNavigate } from "react-router-dom";
const TaskComponent = ({ task, complete, deleteTask }) => {
    /**
     * Function tha returns a Badge depending
     * on the level of the task
     */
    let navigate = useNavigate()
    const taskLevelBadge = () => {

        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-primary"> {task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-warning"> {task.level}</span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-danger"> {task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    };
    const taskIconCompleted = () => {
        if (task.completed) {
            return (
                <i
                    onClick={() => complete(task)}
                    className="bi-toggle-on task-action"
                    style={{ color: "green", fontWeight: "bold" }}
                ></i>
            );
        }
        return (
            <i
                onClick={() => complete(task)}
                className="bi-toggle-off task-action"
                style={{ color: "gray", fontWeight: "bold" }
                }
            ></i >
        );
    };
    const taskClass = `fw-normal ${task.completed ? 'task-completed' : 'task-pending'} `
    return (
        <tr className={taskClass}>
            < th >
                <span className="ms-2">{task.name}</span>
            </th >
            <td>
                <span className="align-middle">{task.description}</span>
            </td>
            <td>
                <span className="align-middle">{taskLevelBadge()}</span>
            </td>
            <td>
                <span className="align-middle">{taskIconCompleted()}</span>
                <i className="bi-trash task-action" onClick={() => deleteTask(task)} style={{ color: "red", fontSize: "20px" }}></i>
                <i className="bi-eye task-action " onClick={() => navigate(`${task.id}`)} style={{ color: "blue", fontSize: "20px" }} ></i>
            </td>
        </tr >
    );
};
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(taskClass).isRequired,
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskComponent;
