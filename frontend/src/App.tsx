import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Checkout from './components/Checkout'
import Transition from './components/Transition'
import AdminPage from './components/AdminPage'
import NavItem from './components/NavItem'
import PeoplePage from './components/PeoplePage'
import ItemsPage from './components/ItemsPage'
import About from './components/About'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <div className="App bg-gray-200">
            <Toaster position="bottom-left"/>
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <>
                                    <NavItem to="/">Products</NavItem>
                                    <NavItem to="/about">About</NavItem>
                                </>
                            }
                        />
                        <Route
                            path="/admin/*"
                            element={
                                <>
                                    <NavItem to="/admin/orders">Orders</NavItem>
                                    <NavItem to="/admin/people">People</NavItem>
                                    <NavItem to="/admin/items">Items</NavItem>
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
                        <Route path="about" element={<About />} />
                    </Route>
                    <Route path="/admin">
                        <Route
                            index
                            element={<Navigate to="orders" replace />}
                        />
                        <Route path="orders" element={<AdminPage />} />
                        <Route path="people" element={<PeoplePage />} />
                        <Route path="items" element={<ItemsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
