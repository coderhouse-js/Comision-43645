import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutContainer from './containers/CheckoutContainer';
import ContadorContainer from './containers/ContadorContainer';
import HomeContainer from './containers/HomeContainer';

const App = () => {
    return (
        <BrowserRouter>
        <nav>Hola! :)</nav>
            <Routes>
                <Route path="/" element={<HomeContainer/>} />
                <Route path="/producto/:productoTitle" element={<CheckoutContainer/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
