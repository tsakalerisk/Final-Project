import { AiOutlinePlus } from 'react-icons/ai'
import PersonModal from './PersonModal'
import { useState } from 'react'

interface Props {
    className?: string
    onAdd?(): void
}

const AddPersonButton = ({ className, onAdd }: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <button
                className={`${className} flex items-center gap-2 text-2xl border border-slate-600 bg-slate-100 shadow-xl z-10`}
                onClick={() => setDialogOpen(true)}
            >
                <AiOutlinePlus />
                Add person
            </button>
            <PersonModal
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSubmit={onAdd}
            />
        </div>
    )
}

export default AddPersonButton
