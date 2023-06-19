import { useEffect, useState } from 'react'
import { getItems } from '../modules/api_calls'
import Item from '../types/Item'
import ItemCard from './ItemCard'

const HomePage = () => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        getItems().then(data => setItems(data))
    }, [items])
    return (
        <div className="p-8">
            <h1 className="text-4xl text-left pl-6">Our tech selection</h1>
            <div className="flex items-start">
                <div className="flex-auto">
                    {items.map((x, i) => (
                        <ItemCard item={x} key={i} />
                    ))}
                </div>
                <div className="sticky top-10">Shopping Cart</div>
            </div>
        </div>
    )
}

export default HomePage
