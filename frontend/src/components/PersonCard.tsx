import Person from '../types/Person'
import { BsPersonCircle } from 'react-icons/bs'
import DeleteButton from './DeleteButton'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import PersonModal from './PersonModal'

interface Props {
    person: Person
    onUpdate(): void
    onDelete(): void
}

const PersonCard = ({ person, onUpdate, onDelete }: Props) => {
    const [editDialogOpen, setEditDialogOpen] = useState(false)

    return (
        <div className="relative card text-left text-lg leading-8 gap-4 p-8 ">
            <div className="absolute right-8 flex gap-3">
                <button
                    className="edit-button"
                    onClick={() => setEditDialogOpen(true)}
                >
                    <AiFillEdit />
                    <span>Edit</span>
                </button>
                <PersonModal
                    personToUpdate={person}
                    open={editDialogOpen}
                    onClose={() => setEditDialogOpen(false)}
                    onSubmit={onUpdate}
                />
                <DeleteButton
                    message="Delete"
                    confirmMessage="Are you sure you want to delete this client and all its associated orders?"
                    onDelete={onDelete}
                />
            </div>
            <div className="flex gap-4 items-center mb-3 font-semibold">
                <BsPersonCircle className="text-4xl" />
                <div className="text-2xl">Client #{person.id}</div>
            </div>
            <div>
                <span className="font-bold">First name:</span>{' '}
                {person.firstName}
            </div>
            <div>
                <span className="font-bold">Last name:</span> {person.lastName}
            </div>
            <div>
                <span className="font-bold">E-mail:</span> {person.email}
            </div>
        </div>
    )
}

export default PersonCard
