import { useEffect, useState } from 'react'
import { getItems } from '../modules/api_calls'
import Item from '../types/Item'
import ItemCard from './ItemCard'
import ShoppingCart from './ShoppingCart'

const HomePage = () => {
    const [items, setItems] = useState<Item[]>([])
    const [cartItems, setCartItems] = useState<Map<Item, number>>(new Map())
    useEffect(() => {
        getItems().then(data => setItems(data))
    }, [])
    const addItemToCart = (item: Item) => {
        setCartItems(
            new Map(cartItems.set(item, (cartItems.get(item) ?? 0) + 1))
        )
    }
    return (
        <div className="page">
            <h1 className="title">Our products</h1>
            <div className="content flex-row items-start justify-center">
                <div className="flex-grow basis-8/12">
                    {items.map(x => (
                        <ItemCard
                            item={x}
                            key={x.id}
                            onAddToCart={() => {
                                addItemToCart(x)
                            }}
                        />
                    ))}
                </div>
                <div className="sticky top-10 flex-grow basis-4/12 overflow-hidden shadow-md">
                    <ShoppingCart
                        cartState={[cartItems, setCartItems]}
                        showCheckoutButton={!!cartItems.size}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
