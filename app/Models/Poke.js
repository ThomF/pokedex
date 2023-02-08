export class Poke{

    constructor(data){
        this.id = data.id || null
        this.name = data.name

    }




    static PokeListTemplate(poke) {
        return ` <div class="col-12 text-center">
        <button onclick="" class="btn mb-3 btn-outline-danger w-100 fw-bold">${poke.name}</button>
        </div>`
    }
}