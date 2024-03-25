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
          <DisplayLocalStorageValue title="subscriber 1" />
          <DisplayLocalStorageValue title="subscriber 2" />
          <DisplayLocalStorageValue title="subscriber 3" />
        </div>
      </LocalStorageProvider>
    </div>
  );
};

export default App;
