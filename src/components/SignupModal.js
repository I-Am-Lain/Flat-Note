import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter } from "react-router-dom";

class SignupModal extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('foo')
    
        // fetch(`https://edu-lain-api.herokuapp.com/api/v1/users/${this.props.auth.id}`, {method: 'DELETE'})
        // .then(resp => resp.json())
        // .then(json => 
        //     this.props.history.push('/')
        // )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
            <Modal.Header className='header-box'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign Up!
                </Modal.Title>
                <button type="button" onClick={this.props.onHide} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </Modal.Header>

            <Modal.Body>
                <Form className='signup-wrapper' onSubmit={this.handleSubmit}>
                    <Form.Group>

                    <label htmlFor='email'>Email</label>
                    <Form.Control size="lg" type="text" placeholder="foobar@yahoo.com" name='email' value={this.state.email} onChange={this.handleChange} />
                    
                    <label htmlFor='password'>Password</label>
                    <Form.Control size="lg" type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    

                    <Button type='submit' class="btn btn-success">Register</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
        )
    }
}

export default withRouter(SignupModal)