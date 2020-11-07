import AppHeader from './components/assets/AppHeader';
import JobContainer from './components/JobContainer';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import JobInfo from './components/innerPage/JobInfo';
import './App.css';
import {useSelector } from 'react-redux';

function App() {
  const themeState = useSelector(state => state.theme);
  console.log(themeState);
  const changeTheme = {
      backgroundColor : themeState.toggle ? "#000" : "#f1f6f9",
      color: themeState.toggle ? "#fff" : "#000"
  }

  const elementTheme = {
    backgroundColor : themeState.toggle ? "#002" : "#fff",
    color: themeState.toggle ? "#fff" : "#000"
  }
  return (
    <Router>
      <Route exact path="/">
        <div className="App" style={changeTheme}>
          <AppHeader />
          <JobContainer elementTheme={elementTheme}/>
        </div>
      </Route>
      <Route exact path="/job-details/:id">
      <div className="App" style={changeTheme}>
       <JobInfo elementTheme={elementTheme}/>
      </div>
      </Route>
    </Router>

  );
}

export default App;
