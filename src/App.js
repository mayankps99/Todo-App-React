import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import {v4 as uuid} from 'uuid';
import Header from './components/layout/header';

class App extends Component{

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Breakfast',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Classes',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Homework',
        completed: false,
      },
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map(
          todo => {
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo;
          }
        )
      }
    )
  }
  // Delete Todo Item
  deleteTodo = (id) => {
    this.setState(
      {
        todos : [...this.state.todos.filter(todo=>todo.id !== id )]
      }
    );
  }

  //Add Todo Item
  addTodo = (title) => {
    // console.log(title+ " ADDED");
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({
      todos : [...this.state.todos , newTodo]
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo= {this.addTodo}/>
                <Todos todos={this.state.todos}
                  markComplete = {this.markComplete}
                  deleteTodo = {this.deleteTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component= {About}/>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
