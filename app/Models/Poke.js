export class Poke{

    constructor(data){
        this.id = data.id || null
        this.name = data.name
        this.img = data.sprites.front_default
        this.weight = data.weight
        this.height = data.height 
        this.user = data.user

    }



    get ActivePokemonTemplate() {
        return `
        <div class="col-8 m-auto p-4 spell-card rounded elevation-1 border border-dark border-2">
            <div class="d-flex justify-content-between">
            <h1>${this.name}</h1>
            </div>
        <div class="d-flex justify-content-between">
            <h2></h2>
            <h2></h2>
            
        </div>
        <div class="d-flex justify-content-between">
            <h3></h3>
            <h3></h3>
        </div>
        <p class="mt-3 p-5 border border-danger border-5 rounded">
        </p>
        </div>
        `
    }


    static PokeListTemplate(poke) {
        return ` <div class="col-12 text-center">
        <button onclick="app.pokesController.setActivePokemon('${poke.url}')" class="btn mb-3 btn-outline-danger w-100 fw-bold">${poke.name}</button>
        </div>`
    }
}