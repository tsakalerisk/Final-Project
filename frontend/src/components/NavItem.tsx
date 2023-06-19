import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    children?: ReactNode
    className?: string
    to: string
}

const NavItem: FC<Props> = ({ children, className, to }) => {
    return (
        <Link
            to={to}
            className={`text-2xl font-semibold leading-6 px-7 py-2 rounded-xl text-inherit hover:bg-slate-200 ${className}`}
        >
            {children}
        </Link>
    )
}

export default NavItem
