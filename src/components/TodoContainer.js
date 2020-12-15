import React from 'react'
import { connect } from 'react-redux'

import TodoCard from './TodoCard'

const TodoContainer = (props) => (
    <div className='todo-container overflow-auto'>
        {
            props.todos.map(todo => <TodoCard key={todo.id} {...todo} />)
        }
    </div>
)

export default connect(state => ({ todos: state.todos }))(TodoContainer)