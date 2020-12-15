import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo } from '../actions/'

const handleDelete = (id, deleteTodo) => {
    fetch(`http://localhost:4000/api/v1/todos/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(json => {
        console.log('deletion worked')
        deleteTodo(id)
    })
}

const TodoCard = (props) => (
    <div class="card" style={{width: '18rem'}}>
        <div class="card-body">
            <p class="card-text" style={{color: 'black'}}>{props.name}......Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type='button' class="btn btn-primary" onClick={() => handleDelete(props.id, props.deleteTodo)} >Delete</button>
        </div>
    </div>
)

export default connect(null, { deleteTodo })(TodoCard)