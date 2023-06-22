import { AiFillDelete } from 'react-icons/ai'
import Person from '../types/Person'
import { BsPersonCircle } from 'react-icons/bs'

interface Props {
    person: Person
    onDelete?(): void
}

const PersonCard = ({ person, onDelete }: Props) => {
    return (
        <div className="relative card text-left text-lg leading-8 gap-4 p-8 ">
            <button
                className="absolute px-4 py-2 flex items-center gap-2 right-12 border-red-600 text-red-600
                 hover:bg-red-600 hover:text-white transition-colors hover:border-transparent"
                onClick={onDelete}
            >
                <AiFillDelete />
                Delete client
            </button>
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
