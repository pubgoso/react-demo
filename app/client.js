import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Redirect, Switch, Router, HashRouter } from 'react-router-dom';       //导入react-router-dom组件
import { createBrowserHistory } from "history";
import Login from './views/Login'
import Root from './views/Root'
import User from './views/User';
import Mentor from './views/mentor';
import { Provider } from 'mobx-react'
import store from './store'
import UserStore from './store/userStore';

ReactDOM.render(
  <Provider {...store}>
    <HashRouter history={createBrowserHistory}>
      {/* <Switch> */}
      <Route path="/login" component={Login} />
      {
        UserStore.IsRoot() ? <Route path="/root" component={Root} /> : ""
      }
      {
        UserStore.IsMentor() ? <Route path="/mentor" component={Mentor} /> : ""
      }
      {
        UserStore.IsUser() ? <Route path="/user" component={User} /> : ""
      }
      
      <Redirect to='/login' />
      {/* </Switch> */}
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
