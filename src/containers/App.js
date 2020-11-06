import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTest,addPersons,loadPersons } from '../actions'
import Rules from "../components/Rules";
import List from "../components/List";
import Loader from "../components/Loader";

class App extends Component {

  componentDidMount() {
      this.props.dispatch(loadPersons())
  }

  componentDidUpdate(prevProps) {
  }
  click(){
    this.props.dispatch(changeTest("New data"));
  }

  reload(){}
  render() {
    return (
      <div>
        <Rules onChange={this.reload.bind(this)}/>
        <List persons={this.props.persons.list}/>
        <Loader/>
        {this.props.test}<br/>
        <button onClick={this.click.bind(this)}>Change</button>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    test:state.testData.test,
    persons:state.persons
  }
};

export default connect(mapStateToProps)(App)
