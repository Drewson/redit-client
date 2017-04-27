import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
  // Link,
  // Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './containers/App';
import PostList from './containers/PostList';
// import CreatePost from './containers/CreatePost';
import MainLayout from './layouts/MainLayout';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
// import Post from './components/Post';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';



// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Provider store={store}>
        <MainLayout>
          <App>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/login" component={Login} />
              <Route path="/posts" exact component={PostList} />
              
              <Route render={() => <h1>Page Not Found </h1>} />
            </Switch>
          </App>
        </MainLayout>
      </Provider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
