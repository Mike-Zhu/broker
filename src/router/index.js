import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Launch from '../modules/launch/launch'
import Login from '../modules/login/login'
import createHistory from 'history/createHashHistory'
import { checkPathname, checkToken } from './routerData'
import asyncComponent from '../components/AsyncComponent'

const routerObject = [
  {
    path: "/",
    component: Launch
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: asyncComponent(() => import('../modules/register/register'))
  },
  {
    path: "/menu",
    component: asyncComponent(() => import('../modules/menu/menu'))
  },
  {
    path: "/customerList",
    component: asyncComponent(() => import('../modules/customerList/customerList'))
  },
  {
    path: "/customerDetail/:userId",
    component: asyncComponent(() => import('../modules/customerDetail/customerDetail'))
  },
  {
    path: "/addCustomer",
    component: asyncComponent(() => import('../modules/addCustomer/addCustomer'))
  },
  {
    path: "/management",
    component: asyncComponent(() => import('../modules/management/management'))
  },
  {
    path: "/manageDetail",
    component: asyncComponent(() => import('../modules/manageDetail/manageDetail'))
  },
  {
    path: "/customerSearch",
    component: asyncComponent(() => import('../modules/customerSearch/customerSearch'))
  }
]
export default class RouterIndex extends Component {
  render() {
    return (
      <HashRouter >
        <Switch>
          {routerObject.map(result => (
            <Route exact key={result.key} path={result.path} component={result.component} />
          ))}
          <Redirect to="/menu" />
        </Switch>
      </HashRouter >
    )
  }
}

const history = createHistory();

history.listen(location => {
  const { pathname } = location;
  if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
    history.replace('login')
  }
})


