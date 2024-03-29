import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import ItemModal from './ItemModal'

interface Props {
    className?: string
    onAdd?(): void
}

const AddItemButton = ({ className, onAdd }: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <button
                className={`${className} flex items-center gap-2 text-2xl border border-slate-600 bg-slate-100 shadow-xl`}
                onClick={() => setDialogOpen(true)}
            >
                <AiOutlinePlus />
                Add item
            </button>
            <ItemModal
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSubmit={onAdd}
            />
        </>
    )
}

export default AddItemButton
