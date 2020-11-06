import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPersons, changeNItems,sort,addHttpError } from '../actions'
import Rules from "../components/Rules";
import List from "../components/List";
import Loader from "../components/Loader";
import ErrorHandler from "../components/ErrorHandler";

// Случайное число в заданном интервале
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


class App extends Component {

  componentDidMount() {
      this.props.dispatch(loadPersons())
  }

  componentDidUpdate(prevProps) {
  }

  // Загрузка выбранного количества персон при изменении запрашиваемого количества
  reload(event){
      this.props.dispatch(changeNItems(event.target.value));
      this.props.dispatch(loadPersons())
  }

  // Сортировка по timestamp
  sort(){
      this.props.dispatch(sort());
  }

  // Попытка получить данные с ошибочным запросом
  createError(event){
      let code = 0;
      if(event.target.checked)
      code = randomInteger(400,700);
      this.props.dispatch(addHttpError(code));
      this.props.dispatch(loadPersons())
  }
  render() {
    return (
      <div>
        <Rules
            nItems={this.props.persons.nItems}
            sort={this.props.persons.sort}
            onChange={this.reload.bind(this)}
            onSort={this.sort.bind(this)}
            createError={this.createError.bind(this)}
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
