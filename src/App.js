import React, { Component } from 'react';
import logo from './logo.svg';
// const echarts = require('echarts');
// import ReactEcharts from 'echarts-for-react';
import './App.css';
import FirstChart from './EChartsView.js';

// import React from 'react';
// import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, 入门示例 edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div id='chart1'>       
          <FirstChart /> 
        </div>
  
        <div id='chart2'>
          <FirstChart />
        </div>


      </div>
    );
  }
}

export default App;
