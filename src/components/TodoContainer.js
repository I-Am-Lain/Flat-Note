import React from 'react'
import { connect } from 'react-redux'

import TodoCard from './TodoCard'

const TodoContainer = (props) => (
    <div className='todo-container'>
        {
            props.todos.map(todo => <TodoCard {...todo} />)
        }
    </div>
)

export default connect(state => ({ todos: state.todos }))(TodoContainer)