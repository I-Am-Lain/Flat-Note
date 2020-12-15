import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    if (!this.props.auth){
      this.props.history.push('/login')
    }
  }

  render(){
    return (
      <div className="dashboard">
        Header
        New Todo form (can create)
        Todo List (can delete)
        'Todo Show Box' (for editing)
      </div>
    )
  }
}

export default connect(state => ({ auth: state.auth, todos: state.todos }))(App);
