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
        <div className="p-8">
            <h1 className="text-4xl text-left pl-6">Our products</h1>
            <div className="flex items-start justify-center gap-12 w-10/12 mx-auto my-5">
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
                <div className="sticky top-10 flex-grow basis-4/12 overflow-hidden">
                    <ShoppingCart
                        cartItems={cartItems}
                        onItemQuantityChnage={(item, value) => {
                            setCartItems(new Map(cartItems.set(item, value)))
                        }}
                        onRemoveItem={item => {
                            //delete cartItems[item]
                            cartItems.delete(item)
                            setCartItems(new Map(cartItems))
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
