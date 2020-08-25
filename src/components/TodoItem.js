import React, { Component } from 'react';
import PropType from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        // if (this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
        return{
            backgroundColor: "#e8e8e8",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {

    // }

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
                    &nbsp;&nbsp;
                    {title}
                    <button onClick= {this.props.deleteTodo.bind(this,id)} style = {buttonStyle}>
                        Delete
                    </button>
                </p>
            </div>
        )
    }
}

TodoItem.propType = {
    todo : PropType.object.isRequired
}

const buttonStyle = {
    height: '20px',
    width : '100px',
    backgroundColor: '#37474f',
    color : '#ffffff',
    border: 'none',
    borderRadius: '5%',
    cursor: 'pointer',
    float: 'right'
}

// const itemStyle = {
//     backgroundColor : '#e8e8e8'
// }

export default TodoItem
