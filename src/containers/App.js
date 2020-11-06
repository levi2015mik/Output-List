import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPersons, changeNItems,sort } from '../actions'
import Rules from "../components/Rules";
import List from "../components/List";
import Loader from "../components/Loader";
import ErrorHandler from "../components/ErrorHandler";

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
  sort(){
      this.props.dispatch(sort());
  }
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
        <ErrorHandler error={this.props.persons.error}/>
          <footer>иконки от <a target="_blank" href="https://icons8.ru">Icons8</a></footer>
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
