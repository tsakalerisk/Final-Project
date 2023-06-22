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
        <div className="page">
            <h1 className="title">Orders</h1>
            <div className="content w-7/12 3xl:w-6/12">
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
