class Collections {
    constructor() {
        this.Collections = []
        this.adapter = new CollectionsAdapter()
       // this.bindEventlisteners()
        this.renderCollections()
    }

    renderCollections() {
        this.adapter.getCollections().then(collections => {
            
            collections.forEach(collection => this.collections.push(new Collection(collection)))
            console.log(this.collection)
        })
        .then(() => {
            this.render()
        })
    }
    render () {
        const collectionsContainer = document.getElementById('collections-container')
        collectionsContainer = 
        
    }

}