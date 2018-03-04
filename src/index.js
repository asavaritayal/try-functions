import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'react-bootstrap'

class Banner extends React.Component {
  render(){
      return (
        <div>
          <h1> Try Azure Functions </h1>
          <p>Quickly and easily build serverless apps with Azure Functions.</p>
          <p> Try Azure Functions for a limited time without a subscription, free of charge or commitment.</p>
        </div>
      );
  }
}


class Main extends React.Component {
    render() {
      return (
        <div class = "body">
          <div class = "main-banner">
            <Banner />
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  