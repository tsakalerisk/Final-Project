import Item from '../types/Item'

interface Props {
    item: Item
    className?: string
}

const TestResult = ({ item, className }: Props) => {
    return (
        <div className={`flex items-center gap-2 p-3 ${className}`}>
            <img
                src={item.imageUrl}
                className="h-full aspect-square object-contain bg-white rounded"
            />
            <div className="text-lg text-ellipsis whitespace-nowrap overflow-hidden">
                {item.name}
            </div>
        </div>
    )
}

export default TestResult
