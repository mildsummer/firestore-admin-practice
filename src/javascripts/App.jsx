import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import List from './containers/List';
import InfiniteList from './containers/InfiniteList';
import InfiniteRealtimeSearchList from './containers/InfiniteRealtimeSearchList';

export default class App extends Component {
  componentDidMount() {
    document.querySelector('.splash').classList.add('splash--hidden');
  }

  render() {
    return (
      <Router basename={window.location.pathname}>
        <div className="app-container">
          <Route path="/" exact component={List} />
          <Route path="/infinite" component={InfiniteList} />
          <Route path="/realtime" component={InfiniteRealtimeSearchList} />
        </div>
      </Router>
    );
  }
}
