import { useEffect, useRef } from 'react'
import Person from '../types/Person'
import { postPerson, updatePerson } from '../modules/api_calls'

interface Props {
    personToUpdate?: Person
    open: boolean
    onClose(): void
    onSubmit?(): void
}

const PersonModal = ({ personToUpdate, open, onClose, onSubmit }: Props) => {
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
                {personToUpdate ? 'Update person' : 'Add person'}
            </div>
            <form
                ref={formRef}
                method="dialog"
                className="flex flex-col gap-3"
                onSubmit={e => {
                    if (personToUpdate) {
                        updatePerson(
                            personToUpdate.id,
                            new FormData(e.currentTarget)
                        ).then(() => {
                            console.log('updated person')
                            onSubmit?.()
                        })
                    } else {
                        postPerson(new FormData(e.currentTarget)).then(() => {
                            console.log('posted person')
                            onSubmit?.()
                        })
                    }
                    formRef.current?.reset()
                    onClose()
                }}
            >
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        defaultValue={personToUpdate?.firstName}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        defaultValue={personToUpdate?.lastName}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={personToUpdate?.email}
                        required
                    />
                </div>
                <div className="flex justify-end gap-3 my-4">
                    <button
                        className="border border-black px-4 py-2"
                        type="button"
                        onClick={() => onClose()}
                    >
                        Cancel
                    </button>
                    <button className={personToUpdate ? 'edit-button' : 'post-button'} type="submit">
                        {personToUpdate ? 'Update person' : 'Add person'}
                    </button>
                </div>
            </form>
        </dialog>
    )
}

export default PersonModal
