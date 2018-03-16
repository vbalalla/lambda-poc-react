import React, { Component } from 'react';

class Dashboard extends React.Component{
    render() {
        return <h2>Hello, {this.props.name}</h2>;
        
      }
}


export default Dashboard;