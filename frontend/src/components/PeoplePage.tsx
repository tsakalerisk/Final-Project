import { useCallback, useEffect, useState } from 'react'
import Person from '../types/Person'
import { deletePerson, getPeople } from '../modules/api_calls'
import PersonCard from './PersonCard'
import { toast } from 'react-hot-toast'
import AddPersonButton from './addPersonButton'

const PeoplePage = () => {
    const [people, setPeople] = useState<Person[]>([])

    const loadPeople = useCallback(() => {
        getPeople().then(data => {
            setPeople(data)
        })
    }, [])

    useEffect(() => loadPeople, [loadPeople])

    return (
        <div className="page">
            <AddPersonButton
                className="fixed bottom-8 right-8"
                onAdd={() => {
                    loadPeople()
                    toast.success('Added person')
                }}
            />
            <h1 className="title">People</h1>
            <div className="content grid grid-cols-2">
                {people.map(x => (
                    <PersonCard
                        person={x}
                        key={x.id}
                        onUpdate={() => {
                            console.log('updating person')
                            toast.success('Updated person')
                            loadPeople()
                        }}
                        onDelete={() => {
                            console.log('deleting person')
                            deletePerson(x.id).then(() => {
                                loadPeople()
                            })
                            toast.success('Deleted person')
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PeoplePage
