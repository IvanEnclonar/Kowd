import './App.css';
import FrontPage from './components/FrontPage.js';
import HomePage from './components/HomePage.js';
import LessonPage from './components/Lesson.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/frontpage" component={ FrontPage } />
          <Route path="/lesson" component={ LessonPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
