import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTest } from '../actions'
import Rules from "../components/Rules";
import List from "../components/List";
import Loader from "../components/Loader";

class App extends Component {

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
  }
  click(){
    this.props.dispatch(changeTest("New data"));
  }
  render() {
    return (
      <div>
        <Rules/>
        <List/>
        <Loader/>
        {this.props.test}<br/>
        <button onClick={this.click.bind(this)}>Change</button>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    test:state.testData.test
  }
};

export default connect(mapStateToProps)(App)
