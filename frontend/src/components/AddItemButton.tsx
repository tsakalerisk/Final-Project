import { useEffect, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { postItem } from '../modules/api_calls'

interface Props {
    className?: string
    onAdd?(): void
}

const AddItemButton = ({ className, onAdd }: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (dialogOpen) {
            dialog?.showModal()
        } else {
            dialog?.close()
        }
    })

    return (
        <>
            <button
                className={`${className} flex items-center gap-2 text-2xl border border-slate-600 bg-slate-100 shadow-xl`}
                onClick={() => setDialogOpen(true)}
            >
                <AiOutlinePlus />
                Add item
            </button>
            <dialog ref={dialogRef} className="modal text-left">
                <div className="modal-title text-2xl mb-8">Add item</div>
                <form
                    method="dialog"
                    className="flex flex-col gap-3"
                    onSubmit={e => {
                        postItem(new FormData(e.currentTarget)).then(() => {
                            console.log('posted item')
                            onAdd?.()
                        })
                        setDialogOpen(false)
                    }}
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" step={0.01} id="price" required/>
                    </div>
                    <div>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="url" name="imageUrl" id="imageUrl" required/>
                    </div>
                    <div className="flex justify-end gap-3 my-4">
                        <button
                            onClick={e => {
                                e.preventDefault()
                                setDialogOpen(false)
                            }}
                            className="border border-black px-4 py-2"
                        >
                            Cancel
                        </button>
                        <button
                            className="post-button"
                            type="submit"
                        >
                            <AiOutlinePlus />
                            Add item
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default AddItemButton
