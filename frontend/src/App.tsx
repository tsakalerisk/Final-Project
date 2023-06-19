import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {
    return (
        <div className="App bg-gray-200">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={'admin page'} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
