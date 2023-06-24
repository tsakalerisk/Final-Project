import { useCallback, useEffect, useState } from 'react'
import Item from '../types/Item'
import { deleteItem, getItems } from '../modules/api_calls'
import ItemCard from './ItemCard'
import AddItemButton from './AddItemButton'

const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([])
    const loadItems = useCallback(() => {
        getItems().then(data => {
            setItems(data)
        })
    }, [])

    useEffect(() => loadItems, [loadItems])

    return (
        <div className="page">
            <AddItemButton
                className="fixed bottom-8 right-8"
                onAdd={loadItems}
            />
            <h1 className="title">Items</h1>
            <div className="content items-center">
                <div className="w-9/12 3xl:w-8/12">
                    {items.map(x => (
                        <ItemCard
                            item={x}
                            key={x.id}
                            admin
                            onDelete={() => {
                                console.log('deleting item')
                                deleteItem(x.id).then(() => {
                                    loadItems()
                                })
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemsPage
