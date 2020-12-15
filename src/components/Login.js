import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignupModal from './SignupModal'
import { loginSuccess } from '../actions/' 

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        signupShow: false,
        error: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('dirtboi')

        const loginConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        }

        fetch(`http://localhost:4000/api/v1/auth`, loginConfig)
        .then(resp => resp.json())
        .then(json => {
            if (json.error){
                this.setState({
                    error: json.error
                })
            } else {
                this.props.loginSuccess(json)
                this.props.history.push('/')
            }
        })

        this.setState({
            email: '',
            password: ''
        })
    }

    handleSignup = () => {
        this.setState({ signupShow: true})
    }

    render(){
        return(
            <>
            {
                this.state.error ? 
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> 
                : 
                null
            }
            <form className='form-wrapper' onSubmit={this.handleSubmit}>

                <div class="mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" 
                        name='email'
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>

                <div class="mb-3">
                    <label htmlFor="exampleFormControlInput2" class="form-label">Password</label>
                    <input type='password' class="form-control" id="exampleFormControlInput2" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>


                    <button type="submit" class="btn btn-primary mb-3">Log In</button>
                    <button type="button" onClick={this.handleSignup} class="btn btn-outline-primary mb-3">Sign Up?</button>
            
            </form>
            <SignupModal show={this.state.signupShow} onHide={() => this.setState({signupShow: false})} />
            </>

        )
    }
}


export default connect(null, { loginSuccess })(Login)