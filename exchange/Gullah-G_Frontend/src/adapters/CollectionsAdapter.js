class CollectionsAdapter {
    constructor() {
        this.endPoint = 'http://localhost:3000/api/v1/collections'
    }
//this is making a fetch request to ENDPOINT , then when we get back that request we get the response then parse json from response
    
    getCollections() {
        return fetch(this.endPoint)
        .then(resp => resp.json()
        )
    }
}

