import { useEffect, useRef, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'

interface Props {
    message: string
    confirmMessage: string
    onDelete?(): void
    className?: string
}

const DeleteButton = ({
    message,
    confirmMessage,
    onDelete,
    className,
}: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const dialog = dialogRef.current
        if (dialogOpen) {
            dialog?.showModal()
        } else {
            dialog?.close()
        }
    }, [dialogOpen])
    return (
        <>
            <button
                className={`delete-button ${className}`}
                onClick={() => setDialogOpen(true)}
            >
                <AiFillDelete />
                {message}
            </button>
            <dialog ref={dialogRef} className="modal">
                <div className="modal-title">{confirmMessage}</div>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setDialogOpen(false)}
                        className="border border-black px-4 py-2"
                    >
                        Cancel
                    </button>
                    <button onClick={onDelete} className="delete-button">
                        <AiFillDelete />
                        {message}
                    </button>
                </div>
            </dialog>
        </>
    )
}

export default DeleteButton
