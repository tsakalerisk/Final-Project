import { useLocation, useNavigate } from 'react-router-dom'
import Item from '../types/Item'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import Form from './Form'
import { addItemToOrder, postOrder, postPerson } from '../modules/api_calls'

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Map<Item, number>>(
        useLocation().state.cartItems
    )
    const navigate = useNavigate()
    const submitForm = async (person: FormData) => {
        try {
            const { id: personId } = await postPerson(person)
            console.log('success with person id', personId)
            const { id: orderId } = await postOrder(personId)
            console.log('success with order id', orderId)
            for await (const [item, quantity] of cartItems.entries()) {
                addItemToOrder(orderId, item.id, quantity)
            }
            console.log('successfull order')
            navigate('/transition', { state: { orderId } })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="page">
            <h1 className="title">Checkout</h1>
            <div className="content flex-row items-start justify-center gap-12">
                <div className="flex-grow basis-7/12">
                    <div className="bg-slate-100 px-10 py-4 text-2xl text-left rounded-md shadow-md">
                        <Form onSubmit={submitForm} />
                    </div>
                </div>
                <div className="flex-grow basis-5/12 overflow-hidden shadow-md">
                    <ShoppingCart
                        cartState={[cartItems, setCartItems]}
                        showCheckoutButton={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout
