import React, { useRef } from 'react'
import PropTypes from "prop-types";
import { LEVELS } from '../../../models/levels.enum';
import { taskClass } from '../../../models/task.class';

const TaskForm = ({ add }) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)
    const addTask = (e) => {
        e.preventDefault();
        const newTask = new taskClass(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }
    return (
        <div className="row">
            <div className="col">
                <form className='mb-4 p-3' onSubmit={addTask}>
                    <div className=" mb-3">
                        <label className='sr-only mb-3' htmlFor="name">Name</label>
                        <input ref={nameRef} id='inputName' type="text" className='form-control' required autoFocus />
                    </div>
                    <div className=" mb-3">
                        <label className='sr-only mb-3' htmlFor="description">Description</label>
                        <input ref={descriptionRef} id='inpuDescription' type="text" className='form-control' required autoFocus />
                    </div>
                    <label className='sr-only mb-3' htmlFor="selectLevel">Priority</label>
                    <select className='form-select mb-3' ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                        <option className='options' value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </select>
                    <div className='mx-auto text-center'>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    )
}
TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}
export default TaskForm