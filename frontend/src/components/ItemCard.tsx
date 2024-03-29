import Item from '../types/Item'
import { MdShoppingCart } from 'react-icons/md'
import DeleteButton from './DeleteButton'
import { useState } from 'react'
import ItemModal from './ItemModal'
import { AiFillEdit } from 'react-icons/ai'

interface Props {
    item: Item
    admin?: boolean
    onAddToCart?(): void
    onUpdate?(): void
    onDelete?(): void
}

const ItemCard = ({
    item,
    admin = false,
    onAddToCart,
    onUpdate,
    onDelete,
}: Props) => {
    const [editDialogOpen, setEditDialogOpen] = useState(false)

    return (
        <div className="card flex mx-auto h-[15em] mb-[2em] overflow-hidden hover:brightness-[96%]">
            <div className="flex-shrink-0 h-full w-[15em] p-[.5em] bg-white">
                <img
                    src={item.imageUrl}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="flex-grow flex flex-col justify-between p-6">
                <div className="flex justify-between text-xl items-start gap-3">
                    <h2 className="text-2xl font-semibold text-left">
                        {item.name}
                    </h2>
                    {admin && (
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                className="edit-button"
                                onClick={() => setEditDialogOpen(true)}
                            >
                                <AiFillEdit/>
                                <span>Edit</span>
                            </button>
                            <ItemModal
                                itemToUpdate={item}
                                open={editDialogOpen}
                                onClose={() => setEditDialogOpen(false)}
                                onSubmit={onUpdate}
                            />
                            <DeleteButton
                                message="Delete"
                                confirmMessage="Are you sure you want to delete this item and remove it from all orders?"
                                onDelete={onDelete}
                            />
                        </div>
                    )}
                </div>
                <div className="self-end flex gap-4">
                    <span className="text-3xl font-bold">
                        {item.price.toFixed(2)}&euro;
                    </span>
                    {admin || (
                        <button
                            className="bg-green-600 text-white hover:brightness-90"
                            onClick={onAddToCart}
                        >
                            <MdShoppingCart className="inline mr-1" />
                            <span>Add to Cart</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemCard
