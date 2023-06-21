const BACKEND = `http://${window.location.hostname}:5000`

const fetchFromBackend = async (
    path: string,
    options?: RequestInit | undefined
) => {
    const response = await fetch(`${BACKEND}${path}`, options)
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        throw new Error(data.message)
    }
}

const getItems = async () => await fetchFromBackend(`/items`)

const postPerson = async (person: FormData) =>
    await fetchFromBackend(`/people`, {
        method: 'POST',
        body: person,
    })

const postOrder = async (personId: number) => {
    const formData = new FormData()
    formData.append('personId', personId.toString())
    return await fetchFromBackend(`/orders`, {
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

export { getItems, postPerson, postOrder, addItemToOrder }
