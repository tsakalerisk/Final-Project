import { AiOutlinePlus } from 'react-icons/ai'
import { postItem, updateItem } from '../modules/api_calls'
import { useRef, useEffect } from 'react'
import Item from '../types/Item'

interface Props {
    itemToUpdate?: Item
    open: boolean
    onClose(): void
    onSubmit?(): void
}

const ItemModal = ({ itemToUpdate, open, onClose, onSubmit }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (open) {
            dialog?.showModal()
        } else {
            dialog?.close()
        }
    }, [open])

    return (
        <dialog ref={dialogRef} className="modal text-left">
            <div className="modal-title text-2xl mb-8">
                {itemToUpdate ? 'Update item' : 'Add item'}
            </div>
            <form
                ref={formRef}
                method="dialog"
                className="flex flex-col gap-3"
                onSubmit={e => {
                    if (itemToUpdate) {
                        updateItem(
                            itemToUpdate.id,
                            new FormData(e.currentTarget)
                        ).then(() => {
                            console.log('updated item')
                            onSubmit?.()
                        })
                    } else {
                        postItem(new FormData(e.currentTarget)).then(() => {
                            console.log('posted item')
                            onSubmit?.()
                        })
                    }
                    formRef.current?.reset()
                    onClose()
                }}
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={itemToUpdate?.name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        step={0.01}
                        id="price"
                        defaultValue={itemToUpdate?.price}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        id="imageUrl"
                        defaultValue={itemToUpdate?.imageUrl}
                        required
                    />
                </div>
                <div className="flex justify-end gap-3 my-4">
                    <button
                        onClick={e => {
                            e.preventDefault()
                            formRef.current?.reset()
                            onClose()
                        }}
                        className="border border-black px-4 py-2"
                    >
                        Cancel
                    </button>
                    <button
                        className={itemToUpdate ? 'edit-button' : 'post-button'}
                        type="submit"
                    >
                        <AiOutlinePlus />
                        {itemToUpdate ? 'Update item' : 'Add item'}
                    </button>
                </div>
            </form>
        </dialog>
    )
}

export default ItemModal
