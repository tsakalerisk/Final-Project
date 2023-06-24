import Person from '../types/Person'
import { BsPersonCircle } from 'react-icons/bs'
import DeleteButton from './DeleteButton'

interface Props {
    person: Person
    onDelete(): void
}

const PersonCard = ({ person, onDelete }: Props) => {
    return (
        <div className="relative card text-left text-lg leading-8 gap-4 p-8 ">
            <DeleteButton
                message="Delete client"
                confirmMessage="Are you sure you want to delete this client and all its associated orders?"
                onDelete={onDelete}
                className="absolute"
            />
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
