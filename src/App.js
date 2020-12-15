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
        Dirtboi
      </div>
    )
  }
}

export default connect(state => ({ auth: state.auth }))(App);
