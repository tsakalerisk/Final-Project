import Order from '../types/Order'
import './OrderCard.css'
import DeleteButton from './DeleteButton'

interface Props {
    order: Order
    onDelete(): void
}

const OrderCard = ({ order, onDelete }: Props) => {
    return (
        <div className="card relative text-left p-12 text-lg flex flex-col gap-4">
            <DeleteButton
                message="Delete order"
                confirmMessage="Are you sure you want to delete this order?"
                onDelete={onDelete}
                className="absolute"
            />
            <div>
                <div className="text-2xl font-bold">Order #{order.id}</div>
                <div className="text-sm">{order.dateTime}</div>
            </div>
            <div>
                <div className="text-xl font-semibold underline">Client</div>
                <div>
                    <div>
                        <span className="font-bold">First name:</span>{' '}
                        {order.person.firstName}
                    </div>
                    <div>
                        <span className="font-bold">Last name:</span>{' '}
                        {order.person.lastName}
                    </div>
                    <div>
                        <span className="font-bold">E-mail:</span>{' '}
                        {order.person.email}
                    </div>
                </div>
            </div>
            <div>
                <div className="text-xl font-semibold mb-2 underline">
                    Items
                </div>
                <div className="border border-slate-500 rounded overflow-hidden">
                    <table id="item-table" className="w-full">
                        <thead>
                            <tr className="bg-slate-300 text-right">
                                <th className="text-left">Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.orderDetails.map((detail, index) => (
                                <tr className="text-right" key={index}>
                                    <td className="text-left line-clamp-1">
                                        {detail.item.name}
                                    </td>
                                    <td>
                                        {detail.item.price.toFixed(2)}&euro;
                                    </td>
                                    <td>x{detail.quantity}</td>
                                    <td>
                                        {(
                                            detail.item.price * detail.quantity
                                        ).toFixed(2)}
                                        &euro;
                                    </td>
                                </tr>
                            ))}

                            <tr className="border-t border-slate-400 text-xl font-semibold">
                                <td colSpan={3} className="text-left">
                                    Total
                                </td>
                                <td className="text-right">
                                    {order.orderDetails
                                        .reduce(
                                            (acc, detail) =>
                                                acc +
                                                detail.item.price *
                                                    detail.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                    &euro;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
