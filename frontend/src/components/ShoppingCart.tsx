import { MdShoppingCart } from 'react-icons/md'

import Item from '../types/Item'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

interface Props {
    cartItems: Map<Item, number>
    onItemQuantityChnage(item: Item, value: number): void
    onRemoveItem(item: Item): void
}

const ShoppingCart = ({
    cartItems,
    onItemQuantityChnage,
    onRemoveItem,
}: Props) => {
    const navigate = useNavigate()
    return (
        <div className="bg-slate-100 px-10 py-4 text-2xl text-left rounded-md shadow-md">
            <h2 className="flex items-center text-[1.6rem] gap-2 my-2">
                <MdShoppingCart />
                Your cart
            </h2>
            <hr className="border-slate-300" />
            <div className="py-3">
                {cartItems.size ? (
                    [...cartItems.entries()].map(([item, quantity]) => (
                        <CartItem
                            itemName={item.name}
                            quantity={quantity}
                            onQuantityChange={value =>
                                onItemQuantityChnage(item, value)
                            }
                            onRemove={() => onRemoveItem(item)}
                        />
                    ))
                ) : (
                    <div className="text-center text-lg text-slate-600">
                        You don't have any items
                    </div>
                )}
            </div>
            <hr className="border-slate-300" />
            <div className="flex justify-between font-semibold my-2">
                <span>Total:</span>
                <span>
                    {[...cartItems.entries()]
                        .reduce(
                            (acc, [item, quantity]) =>
                                acc + item.price * quantity,
                            0
                        )
                        .toFixed(2)}
                    &euro;
                </span>
            </div>
            <hr className="bg-slate-300" />
            {!!cartItems.size && (
                <button
                    className="w-full my-2 text-xl bg-slate-300 hover:brightness-95 transition-all duration-100"
                    onClick={() => navigate('/')}
                >
                    Proceed to Checkout
                </button>
            )}
        </div>
    )
}

export default ShoppingCart
