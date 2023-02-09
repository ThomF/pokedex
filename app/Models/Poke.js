export class Poke{

    constructor(data){
        this.id = data.id || null
        this.name = data.name
        this.img = data.sprites.other["official-artwork"].front_default
        this.weight = data.weight
        this.height = data.height 
        this.user = data.user
        this.url = data.url

    }



    get ActivePokemonTemplate() {
        return `
        <div class="col-8 m-auto p-4 spell-card rounded elevation-1 border border-dark border-2">
            <div class="text-center">
            <h1>${this.name}</h1>
            </div>
        <div class="text-center">
            <img class="pokeImg" src="${this.img}">
            
        </div>
        <div class="d-flex justify-content-between">
            
        </div>
        <div class="mt-3 p-5 border border-danger border-5 rounded">
        <h3>Height: ${this.height}</h3>
            <h3>Weight: ${this.weight}</h3>
        </div>
        </div>
        `
    }


    static PokeListTemplate(poke) {
        return ` <div class="col-12 text-center">
        <button onclick="app.pokesController.setActivePokemon('${poke.url}')" class="btn mb-3 btn-outline-danger w-100 fw-bold">${poke.name}</button>
        </div>`
    }
    get SandboxPokeListTemplate() {
        return ` <div class="col-12 text-center">
        <button onclick="app.pokesController.setActivePokemon('')" class="btn mb-3 btn-outline-danger w-100 fw-bold">${this.name}</button>
        </div>`
    }



}