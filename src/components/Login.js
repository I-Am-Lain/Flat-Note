import React from 'react'
import { Link } from 'react-router-dom'

import SignupModal from './SignupModal'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        signupShow: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('dirtboi')
    }

    handleSignup = () => {
        this.setState({ signupShow: true})
    }

    render(){
        return(
            <>
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
                    <input class="form-control" id="exampleFormControlInput2" 
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


export default Login