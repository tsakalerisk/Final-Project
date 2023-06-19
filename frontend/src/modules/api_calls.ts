const BACKEND = `http://${window.location.hostname}:5000`

const getItems = async () => {
    return fetch(`${BACKEND}/items`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Network response was not ok.')
    })
}

export {
    getItems
}