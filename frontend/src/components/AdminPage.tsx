import { useCallback, useEffect, useState } from 'react'
import { deleteOrder, getOrders } from '../modules/api_calls'
import Order from '../types/Order'
import OrderCard from './OrderCard'

const AdminPage = () => {
    const [orders, setOrders] = useState<Order[]>([])

    const loadOrders = useCallback(() => {
        getOrders().then(data => setOrders(data))
    }, [])

    useEffect(() => loadOrders(), [loadOrders])

    return (
        <div className="p-8">
            <h1 className="text-4xl text-left pl-6">Orders</h1>
            <div className="flex flex-col w-7/12 mx-auto my-12 gap-6">
                {orders.map(order => (
                    <OrderCard
                        order={order}
                        key={order.id}
                        onDelete={() => {
                            console.log('deleting order')
                            deleteOrder(order.id).then(() => {
                                loadOrders()
                            })
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminPage
