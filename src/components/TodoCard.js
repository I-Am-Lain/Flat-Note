import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo } from '../actions/'

import ModalEdit from './ModalEdit'
import Button from 'react-bootstrap/Button'

const handleDelete = (id, deleteTodo) => {
    fetch(`http://localhost:4000/api/v1/todos/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(json => {
        console.log('deletion worked')
        deleteTodo(id)
    })
}

const TodoCard = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <p class="card-text" style={{color: 'black'}}>{props.name}</p>
                <button type='button' class="btn btn-success" onClick={() => handleDelete(props.id, props.deleteTodo)} >Finish</button>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                </Button>

                <ModalEdit
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    name={props.name}
                    id={props.id}
                />
                {/* <button type='button' class="btn btn-warning" onClick={() => handleDelete(props.id, props.deleteTodo)} >Edit</button> */}
            </div>
        </div>
    )
}

export default connect(null, { deleteTodo })(TodoCard)