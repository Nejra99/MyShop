import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductInfo from './components/Products/ProductInfo';
import { useSelector } from 'react-redux';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
    const product = useSelector((state) => state.products.currentItem);

    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path={'/'} element={<Home />} />
                    <Route exact path={'/cart'} element={<Cart />} />
                    {!product ? (
                        <Route exact path={'/'} element={<Home />} />
                    ) : (
                        <Route
                            exact
                            path={'/productinfo/:id'}
                            element={<ProductInfo />}
                        />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
