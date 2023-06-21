import Item from "./Item"
import Person from "./Person"

interface Order {
    id: number
    person: Person
    dateTime: string
    orderDetails: OrderDetails[]
}

interface OrderDetails {
    item: Item
    quantity: number
}

export default Order