import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import AboutPage from "./pages/AboutPage.js";
import ArticlePage from "./pages/ArticlePage.js";
import ArticlesListPage from "./pages/ArticlesListPage.js";
import Homepage from "./pages/HomePage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import NotFoundPage from "./pages/NotFoundPage";

// function App() {
//   return (
//     <div className="App">
//       <Homepage />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
