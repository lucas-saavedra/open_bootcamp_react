import React from 'react'

import PropTypes from 'prop-types'



const Todo = ({ onClick, completed, text, id, delTodo }) => {
    return (
        <div>

            <li onClick={() => onClick(id)}
                style={
                    {
                        textDecoration: completed && 'line-trough',
                        textDecorationColor: completed && 'green',
                        color: completed && 'green'
                    }
                }
            >
                {id}-{text} - <button onClick={() => delTodo(id)} >Delete todo</button>
            </li>
        </div>
    )
}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo