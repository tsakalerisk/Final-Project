const BACKEND = `http://${window.location.hostname}:5000`

const getItems = async () => {
    const response = await fetch(`${BACKEND}/items`)
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        throw new Error(data.message)
    }
}

const postPerson = async (person: FormData) => {
    const response = await fetch(`${BACKEND}/people`, {
        method: 'POST',
        body: person,
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        throw new Error(data.message)
    }
}

const postOrder = async (personId: number) => {
    const formData = new FormData()
    formData.append('personId', personId.toString())
    const response = await fetch(`${BACKEND}/orders`, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        throw new Error(data.message)
    }
}

const addItemToOrder = async (
    orderId: number,
    itemId: number,
    quantity: number
) => {
    const formData = new FormData()
    formData.append('itemId', itemId.toString())
    formData.append('quantity', quantity.toString())
    const response = await fetch(`${BACKEND}/orders/${orderId}/add_item`, {
        method: 'POST',
        body: formData,
    })
    if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
    }
}

export { getItems, postPerson, postOrder, addItemToOrder }
