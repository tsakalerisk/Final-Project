import { useCallback, useEffect, useState } from 'react'
import Person from '../types/Person'
import { deletePerson, getPeople } from '../modules/api_calls'
import PersonCard from './PersonCard'

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
            <h1 className="title">People</h1>
            <div className="content grid grid-cols-2">
                {people.map(x => (
                    <PersonCard
                        person={x}
                        key={x.id}
                        onDelete={() => {
                            console.log('deleting order')
                            deletePerson(x.id).then(() => {
                                loadPeople()
                            })
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PeoplePage
