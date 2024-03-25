import './App.css';
import DisplayLocalStorageValue from './components/DisplayLocalStorageValue';
import SetLocalStorageValue from './components/SetLocalStorageValue';
import { LocalStorageProvider } from './contexts/LocalStorageContext';

const App = () => {
  return (
    <div>
      <LocalStorageProvider>
        <div>
          <SetLocalStorageValue />
          <DisplayLocalStorageValue />
          <DisplayLocalStorageValue />
          <DisplayLocalStorageValue />
        </div>
      </LocalStorageProvider>
    </div>
  );
};

export default App;
