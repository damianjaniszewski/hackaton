import Login from './screens/Login';
import Main from './components/Main';
import Dashboard from './screens/Dashboard';
import NotFound from './screens/NotFound';

export default {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: '*', component: NotFound }
  ],
  indexRoute: { component: Dashboard }
};
