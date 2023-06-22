import Item from '../types/Item'
import { MdShoppingCart } from 'react-icons/md'

interface Props {
    item: Item
    onAddToCart?(): void
}

const ItemCard = ({ item, onAddToCart }: Props) => {
    return (
        <div className="card flex mx-auto h-[15em] mb-[2em] overflow-hidden hover:brightness-[96%]">
            <div className="flex-shrink-0 h-full w-[15em] p-[.5em] bg-white">
                <img
                    src={item.imageUrl}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="flex-grow flex flex-col justify-between p-6">
                <h2 className="text-2xl font-semibold text-left">
                    {item.name}
                </h2>
                <div className="self-end flex gap-4">
                    <span className="text-3xl font-bold">
                        {item.price.toFixed(2)}&euro;
                    </span>
                    <button
                        className="bg-green-600 text-white hover:brightness-90"
                        onClick={onAddToCart}
                    >
                        <MdShoppingCart className="inline mr-1" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
