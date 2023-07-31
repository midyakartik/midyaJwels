import {Navbar,Footer} from './components';
import { Cart } from './Pages/Cart';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route
          path='/'
          element={<Home/>}>
          </Route>

          <Route
          path='/product-detail'
          element={<ProductDetail/>}>
          </Route>
          
          <Route
          path='/cart'
          element={<Cart/>}>
          </Route>

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;