import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import tasks from '../../store/Tasks';
const TaskDetailPage = () => {
    const [task, setTask] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const taskFound = tasks.find((t => t.id === id));
        taskFound && setTask(taskFound);
    }, [id])

    return (

        <div>
            {task ? (
                <>
                    <h1 className="ms-2">{task.id}</h1>
                    <h2 className="ms-2">{task.name}</h2>
                    <h3 className="align-middle">{task.description}</h3>
                </>
            ) : (<p>Task not found</p>)
            }

        </div >
    )
}

export default TaskDetailPage