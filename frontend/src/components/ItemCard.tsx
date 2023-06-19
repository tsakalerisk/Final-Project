import Item from '../types/Item'

interface Props {
    item: Item
}

const ItemCard = ({ item }: Props) => {
    return (
        <div className="flex w-[50em] mx-auto h-[15em] bg-slate-100 my-[1.5em] rounded-xl overflow-hidden shadow-md hover:brightness-90">
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
                <div className="self-end text-3xl font-bold">
                    {item.price.toFixed(2)}&euro;
                </div>
            </div>
        </div>
    )
}

export default ItemCard
