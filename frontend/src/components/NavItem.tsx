import { FC, ReactNode } from 'react'
import {NavLink } from 'react-router-dom'

interface Props {
    children?: ReactNode
    className?: string
    to: string
}

const NavItem: FC<Props> = ({ children, className, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-2xl font-semibold leading-6 px-7 py-2 rounded-xl text-inherit 
                ${
                    isActive
                        ? 'bg-slate-200 text-blue-600'
                        : 'hover:bg-slate-200 hover:text-blue-600'
                }
                ${className}`
            }
        >
            {children}
        </NavLink>
    )
}

export default NavItem
