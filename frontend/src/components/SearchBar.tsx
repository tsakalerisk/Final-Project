import { CgShortcut } from 'react-icons/cg'
import { VscSearch } from 'react-icons/vsc'

const SearchBar = () => {
    return (
        <div
            className="flex items-center text-lg px-3 py-1 
                border-2 border-slate-500 rounded-md
                 bg-slate-200 focus-within:border-blue-600"
        >
            <VscSearch className="mr-2" />
            <input
                placeholder="Search for a product..."
                className="bg-inherit focus:outline-none"
                type="search"
            />
            <CgShortcut className="inline h-6 w-6 text-slate-500" />
        </div>
    )
}

export default SearchBar
