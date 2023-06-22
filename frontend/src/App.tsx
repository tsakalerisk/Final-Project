import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Checkout from './components/Checkout'
import Transition from './components/Transition'
import AdminPage from './components/AdminPage'
import NavItem from './components/NavItem'
import PeoplePage from './components/PeoplePage'

function App() {
    return (
        <div className="App bg-gray-200">
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <>
                                    <NavItem to="/">Products</NavItem>
                                    <NavItem to="/about">Explore</NavItem>
                                </>
                            }
                        />
                        <Route
                            path="/admin/*"
                            element={
                                <>
                                    <NavItem to="/admin/orders">Orders</NavItem>
                                    <NavItem to="/admin/people">People</NavItem>
                                </>
                            }
                        />
                    </Routes>
                </Header>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="transition" element={<Transition />} />
                    </Route>
                    <Route path="/admin">
                        <Route
                            index
                            element={<Navigate to="orders" replace />}
                        />
                        <Route path="orders" element={<AdminPage />} />
                        <Route path="people" element={<PeoplePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
