import { StackNavigator } from 'react-navigation';

import Login from '../containers/Login/index';
import Home from '../containers/Home/index';
import SimpleAnimation from '../containers/SimpleAnimation/index';
import Users from '../containers/Users';

const _setRoute = (component, name) => ({
  screen: component,
  navigationOptions: {
    title: name,
  }
});

const Router = StackNavigator({
  Users: _setRoute(Users, 'Users'),
  Login: _setRoute(Login, 'Login'),
  Home: _setRoute(Home, 'Home'),
  SimpleAnimation: _setRoute(SimpleAnimation, 'Simple Animation'),
});

export default Router;

