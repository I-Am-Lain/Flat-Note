import React from 'react'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { editTodo } from '../actions/'


class ModalEdit extends React.Component {

    state = {
        name: this.props.name
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const configEditedTodo = {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }
        
        fetch(`http://localhost:4000/api/v1/todos/${this.props.id}`, configEditedTodo)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.props.editTodo(json)
            this.props.onHide()
        })

    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit my Todo {this.props.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon1">
                                Save Changes
                            </button>

                            <textarea class="form-control" aria-label="With textarea"
                            name='name' 
                            value={this.state.name}
                            onChange={this.handleChange}
                            >
                            </textarea>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }


}



export default connect(null, { editTodo })(ModalEdit)