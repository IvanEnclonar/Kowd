import './App.css';
import FrontPage from './components/FrontPage.js';
import HomePage from './components/HomePage.js';
import LessonPage from './components/Lesson.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/frontpage" component={ FrontPage } />
          <Route path="/lesson/:id" component={ LessonPage } />
        </Switch>
        <div className="MobileView">
            <div className="MobileView__Container">
                <img className="MobileView__Image" alt="Construction" src="https://storage.googleapis.com/knomad-gcp/undraw_under_construction_46pa.svg"/>
                <p className="MobileView__Text">We’re currently adding more features to the platform,  including mobile support. Please use a desktop or come back soon🚀.</p>
            </div>
        </div>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
