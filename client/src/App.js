import './css/App.css';
import './css/Chat.scss';
import './css/SignIn.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ChatBox from './components/ChatBox';
import SignInBox from './components/SignInBox';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <SignInBox />
          </Route>
          <Route exact path="/chat">
            <ChatBox />
          </Route>
        </Switch>
        <div className='circle1'></div>
        <div className='circle2'></div>
      </div>
    </Router>
  );
}

export default App;
