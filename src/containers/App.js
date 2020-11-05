import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTest } from '../actions'

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
