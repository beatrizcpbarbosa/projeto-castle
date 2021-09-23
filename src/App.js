import ProviderShop from './ContextApi/Provider'
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <ProviderShop>
      <Home />
    </ProviderShop>
  );
}

export default App;
