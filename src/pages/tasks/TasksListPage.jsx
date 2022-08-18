import { Outlet } from "react-router-dom"
import TaskList from "../../components/containers/TaskList"

const TasksListPage = () => {
    return (
        <div>
            <TaskList></TaskList>
            <Outlet />
        </div>
    )
}

export default TasksListPage