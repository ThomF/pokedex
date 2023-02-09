export class CaughtPoke {

    constructor(data){
        this.name = data.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height 
        this.user = data.user
        this.url = data.url

    }

    get SandboxPokeListTemplate() {
        return ` <div class="col-12 text-center">
        <button onclick="app.pokesController.setActivePokemon('')" class="btn mb-3 btn-outline-danger w-100 fw-bold">${this.name}</button>
        </div>`
    }

}