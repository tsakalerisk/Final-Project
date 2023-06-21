import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Checkout from './components/Checkout'
import Transition from './components/Transition'
import AdminPage from './components/AdminPage'

function App() {
    return (
        <div className="App bg-gray-200">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/transition" element={<Transition />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
