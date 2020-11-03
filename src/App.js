import AppHeader from './components/assets/AppHeader';
import FilterInputs from './components/assets/FilterInputs';
import JobContainer from './components/JobContainer';

import './App.css';

function App() {
  return (
      <div className="App">
        <AppHeader />
        <FilterInputs />
        <JobContainer />
      </div>

  );
}

export default App;
