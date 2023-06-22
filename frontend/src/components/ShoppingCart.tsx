import { MdShoppingCart } from 'react-icons/md'

import Item from '../types/Item'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

interface Props {
    cartState: [
        Map<Item, number>,
        React.Dispatch<React.SetStateAction<Map<Item, number>>>
    ]
    showCheckoutButton?: boolean
}

const ShoppingCart = ({ cartState, showCheckoutButton }: Props) => {
    const [cartItems, setCartItems] = cartState
    const navigate = useNavigate()
    return (
        <div className="card px-10 py-4 text-2xl text-left">
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
                                setCartItems(
                                    new Map(cartItems.set(item, value))
                                )
                            }
                            onRemove={() => {
                                cartItems.delete(item)
                                setCartItems(new Map(cartItems))
                            }}
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
            {showCheckoutButton && (
                <>
                    <hr className="bg-slate-300" />
                    <button
                        className="w-full my-2 text-xl bg-slate-300 hover:brightness-95 transition-all duration-100"
                        onClick={() =>
                            navigate('/checkout', { state: { cartItems } })
                        }
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    )
}

export default ShoppingCart
