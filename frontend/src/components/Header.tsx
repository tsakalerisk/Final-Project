import { Link } from 'react-router-dom'
import logo from '../assets/techpro_logo.png'
import SearchBar from './SearchBar'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const Header = ({ children }: Props) => {
    return (
        <div className="bg-slate-100 text-slate-900 flex items-center justify-between p-6 lg:px-8 shadow-md">
            <Link to='/'>
                <h1 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                    <img src={logo} className="inline w-8" />
                    Final Project
                </h1>
            </Link>
            <nav>{children}</nav>
            <SearchBar />
        </div>
    )
}

export default Header
