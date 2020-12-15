import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import TodoContainer from './components/TodoContainer'

import { createTodo } from './actions/'

import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

  state = {
    name: ''
  }

  componentDidMount(){
    if (!this.props.auth){
      this.props.history.push('/login')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log('foo')

    const configTodo = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name, user_id: this.props.auth.id})
    }

    fetch('http://localhost:4000/api/v1/todos', configTodo)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.props.createTodo(json)
    })

    this.setState({
      name: ''
    })

  }

  render(){
    return (
      <div className="dashboard">
        <h1>Welcome to Ever-Note</h1>

        <div class="meine input-group mb-3">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.handleSubmit}>New Todo:</button>
          <input type="text" name='name' class="form-control" 
          placeholder="(e.g. Buy eggs...)" 
          value={this.state.name}
          onChange={this.handleChange}
          aria-label="Example text with button addon" 
          aria-describedby="button-addon1"/>
        </div>

        <TodoContainer/>
        bottom line

</div>
    )
  }
}

export default connect(state => ({ auth: state.auth }), { createTodo })(App);
