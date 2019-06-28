import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/menu';
import routes from './route';
import Icon from './public/favicon.ico';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          <Switch>
            {this.showContents(routes)}
          </Switch>
        </div>
      </Router>
    )

  }
  showContents = (Routes) => {
    let result = null;
    if (Routes.length > 0) {
      result = Routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return result;
  }
}

export default App;
