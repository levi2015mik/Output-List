import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPersons, changeNItems } from '../actions'
import Rules from "../components/Rules";
import List from "../components/List";
import Loader from "../components/Loader";

class App extends Component {

  componentDidMount() {
      this.props.dispatch(loadPersons())
  }

  componentDidUpdate(prevProps) {
  }

  reload(event){
      this.props.dispatch(changeNItems(event.target.value));
      this.props.dispatch(loadPersons())
  }
  sort(){}
  render() {
    return (
      <div>
        <Rules
            nItems={this.props.persons.nItems}
            sort={this.props.persons.sort}
            onChange={this.reload.bind(this)}
            onSort={this.sort.bind(this)}
        />
        <List persons={this.props.persons.sortList}/>
        <Loader status={this.props.persons.loader}/>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    persons:state.persons
  }
};

export default connect(mapStateToProps)(App)
