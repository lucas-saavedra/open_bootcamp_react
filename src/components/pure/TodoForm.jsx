import React, { useRef } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ submit }) => {
    const text = useRef();
    return (
        <div>
            <h2>Create your todo</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(text.current.value);
                text.current.value = '';
            }} >
                <input type='text' ref={text} />
                <button type='submit' >Create todo</button>
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default TodoForm;
