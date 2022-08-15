import { useEffect } from "react";
import { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { taskClass } from "../../models/task.class"
import TaskForm from "../pure/forms/TaskForm";
import TaskFormik from "../pure/forms/TaskFormik";
import TaskComponent from "../pure/TaskComponent";

const TaskList = () => {
    const defaultTask1 = new taskClass(
        'Example1',
        'Default description1',
        true,
        LEVELS.NORMAL
    );
    const defaultTask2 = new taskClass(
        'Example2',
        'Default description2',
        false,
        LEVELS.URGENT
    );
    const defaultTask3 = new taskClass(
        'Example3',
        'Default description3',
        false,
        LEVELS.BLOCKING
    );
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const completeTask = (task) => {
        const findIndex = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[findIndex].completed = !tempTasks[findIndex].completed;
        setTasks(tempTasks)
    }
    const deleteTask = (task) => {
        const findIndex = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(findIndex, 1);
        setTasks(tempTasks)
    }
    const add = (task) => {
        setTasks([...tasks, task])
    }
    const TaskTable = () => {
        return (
            <table className="">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Pritority</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>


                <tbody>

                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    complete={completeTask}
                                    key={index}
                                    task={task}
                                    deleteTask={deleteTask}
                                >
                                </TaskComponent>
                            )
                        })}

                </tbody>
            </table>
        )
    }
    return (
        <div className="col-md-8 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h5>
                        Your tasks:
                    </h5>
                </div>

                <div className="card-body" style={{ position: 'relative', height: '15rem', overflowY: 'scroll' }}>
                    {tasks.length === 0 ?
                        <>
                            <p>No tasks</p>
                        </>

                        :
                        <>
                            <TaskTable />
                        </>
                    }

                </div>
                {/*   <TaskForm add={add} length={tasks.length} />  */}
                 <TaskFormik add={add} length={tasks.length} />
            </div>

        </div>

    )
}


export default TaskList
