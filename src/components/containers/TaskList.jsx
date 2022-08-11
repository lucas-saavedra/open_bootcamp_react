import { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { taskClass } from "../../models/task.class"
import TaskForm from "../pure/forms/TaskForm";
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
        setTasks([...task, task])
    }
    return (
        <div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    <div className="card-body" style={{ position: 'relative', height: '400px' }}>
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

                                {tasks.map((task, index) => {
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
                    </div>
                    <TaskForm add={add} />
                </div>
            </div>
        </div >
    )
}


export default TaskList
