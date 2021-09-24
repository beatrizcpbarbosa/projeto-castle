import ProviderShop from './ContextApi/Provider'
import Home from './Pages/Home';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <ProviderShop>
      <Home />
    </ProviderShop>
  );
}

export default App;
