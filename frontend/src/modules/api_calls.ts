const BACKEND = `http://${window.location.hostname}:5000`

const fetchFromBackend = async (
    path: string,
    options?: RequestInit | undefined
) => {
    const response = await fetch(`${BACKEND}${path}`, options)
    if (response.ok) {
        const body = await response.text()
        if (body) {
            return JSON.parse(body)
        } else {
            return
        }
    } else {
        const errorBody = await response.json()
        throw new Error(errorBody.message)
    }
}

const getItems = async () => await fetchFromBackend(`/items`)

const postPerson = async (person: FormData) =>
    await fetchFromBackend('/people', {
        method: 'POST',
        body: person,
    })

const postOrder = async (personId: number) => {
    const formData = new FormData()
    formData.append('personId', personId.toString())
    return await fetchFromBackend('/orders', {
        method: 'POST',
        body: formData,
    })
}

const addItemToOrder = async (
    orderId: number,
    itemId: number,
    quantity: number
) => {
    const formData = new FormData()
    formData.append('itemId', itemId.toString())
    formData.append('quantity', quantity.toString())
    return await fetchFromBackend(`/orders/${orderId}/add_item`, {
        method: 'POST',
        body: formData,
    })
}

const getOrders = async () => await fetchFromBackend('/orders')

const deleteOrder = async (orderId: number) =>
    await fetchFromBackend(`/orders/${orderId}`, { method: 'DELETE' })

const getPeople = async () => await fetchFromBackend('/people')

const deletePerson = async (personId: number) =>
    await fetchFromBackend(`/people/${personId}`, { method: 'DELETE' })

const deleteItem = async (itemId: number) =>
    await fetchFromBackend(`/items/${itemId}`, { method: 'DELETE' })

const postItem = async (item: FormData) =>
    await fetchFromBackend('/items', {
        method: 'POST',
        body: item,
    })

const updateItem = async (itemId: number, item: FormData) => await fetchFromBackend(`/items/${itemId}`, { method: 'PUT', body: item })

const updatePerson = async (personId: number, person: FormData) => await fetchFromBackend(`/people/${personId}`, { method: 'PUT', body: person })

const updateOrder = async (orderId: number, personId: number) => {
    const formData = new FormData()
    formData.append('personId', personId.toString())
    return await fetchFromBackend(`/orders/${orderId}`, {
        method: 'PUT',
        body: formData,
    })
}

export {
    getItems,
    postPerson,
    postOrder,
    addItemToOrder,
    getOrders,
    deleteOrder,
    getPeople,
    deletePerson,
    deleteItem,
    postItem,
    updateItem,
    updatePerson,
    updateOrder
}
