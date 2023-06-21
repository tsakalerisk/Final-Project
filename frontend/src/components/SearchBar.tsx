import { useCallback, useEffect, useState } from 'react'
import { CgShortcut } from 'react-icons/cg'
import { VscSearch } from 'react-icons/vsc'
import Item from '../types/Item'
import { getItems } from '../modules/api_calls'
import SearchResult from './SearchResult'

const SearchBar = () => {
    const [items, setItems] = useState<Item[]>([])
    const [filteredItems, setFilteredItems] = useState<Item[]>([])
    const [resultsVisible, setResultsVisible] = useState(false)

    useEffect(() => {
        getItems().then(data => setItems(data))
    }, [])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === '/') {
            // focus on search bar and consume the event if not already focused
            const search = document.getElementById('search')
            if (search && document.activeElement !== search) {
                search.focus()
                e.preventDefault()
            }
        } else if (e.key === 'Escape') {
            // unfocus search bar and consume the event if already focused
            const search = document.getElementById('search')
            if (search && document.activeElement === search) {
                search.blur()
                e.preventDefault()
            }
        }
    }, [])

    const handleChange = useCallback(() => {
        const search = document.getElementById('search') as HTMLInputElement
        setResultsVisible(!!search.value)
        if (search && document.activeElement === search) {
            setFilteredItems(
                // if search is not empty, filter items by name prioritizing items that start with the search value
                search.value
                    ? items
                          .filter(x =>
                              x.name
                                  .toLowerCase()
                                  .startsWith(search.value.toLowerCase())
                          )
                          .concat(
                              items.filter(
                                  x =>
                                      x.name
                                          .toLowerCase()
                                          .includes(
                                              search.value.toLowerCase()
                                          ) &&
                                      !x.name
                                          .toLowerCase()
                                          .startsWith(
                                              search.value.toLowerCase()
                                          )
                              )
                          )
                    : []
            )
        }
    }, [items])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])
    return (
        <div
            className="relative flex items-center text-lg px-3 py-1 
                border-2 border-slate-500 rounded-md
                 bg-slate-200 focus-within:border-blue-600"
        >
            <VscSearch className="mr-2" />
            <input
                id="search"
                placeholder="Search for a product..."
                className="bg-inherit focus:outline-none"
                type="search"
                onFocus={e => setResultsVisible(!!e.target.value)}
                onBlur={() => setResultsVisible(false)}
                onChange={handleChange}
            />
            <CgShortcut className="inline h-6 w-6 text-slate-500" />
            {resultsVisible && filteredItems.length > 0 && (
                <div className="absolute right-0 left-0 top-full text-[.3rem] z-10 bg-slate-100 rounded-bl rounded-br border border-slate-500">
                    {filteredItems.slice(0, 5).map(x => (
                        <SearchResult item={x} key={x.id} className="h-16" />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar
