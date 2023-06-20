import { GrClose } from 'react-icons/gr'

interface Props {
    itemName: string
    quantity: number
    onQuantityChange(value: number): void
    onRemove(): void
}

const CartItem = ({ itemName, quantity, onQuantityChange, onRemove }: Props) => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden flex-1 text-xl">
                {itemName}
            </span>
            <input
                type="number"
                value={quantity}
                min={1}
                className="w-[3ch] border border-slate-500 text-center rounded"
                onChange={e => {
                    onQuantityChange(parseInt(e.target.value))
                }}
            />
            <button className="p-2" onClick={onRemove}>
                <GrClose />
            </button>
        </div>
    )
}

export default CartItem
