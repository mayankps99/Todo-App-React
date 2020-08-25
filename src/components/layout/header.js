import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <header style= {headerStyle}>
            <h1>Todo App</h1>
            <Link style={linkStyle} to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
}

const headerStyle = {
    backgroundColor:'#263238',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}