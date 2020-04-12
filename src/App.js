import React from 'react';
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideBar from 'components/SideBar'
import Index from 'pages/Index'
import Report from 'pages/Report'

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <div style={{ marginRight: '60px' }}>
          <Switch>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default hot(module)(App);