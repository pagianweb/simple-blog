import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogNav from './components/BlogNav';
import BlogFooter from './components/BlogFooter';
import Home from './pages/Home';
import Post from './pages/Post';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <BlogNav />
          <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/posts/:postId" component={Post} /> 
              <Route path="*" exact component={PageNotFound} /> 
          </Switch>
      </Router>
      <BlogFooter />
    </div>
    
  );
}

export default App;
