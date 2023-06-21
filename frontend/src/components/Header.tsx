import NavBar from './NavBar'
import logo from '../assets/techpro_logo.png'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className="bg-slate-100 text-slate-900 flex items-center justify-between p-6 lg:px-8 shadow-md">
            <h1 className="text-2xl font-bold flex items-center gap-3">
                <img src={logo} className="inline w-8" />
                Final Project
            </h1>
            <NavBar />
            <SearchBar />
        </div>
    )
}

export default Header
