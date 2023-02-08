import { pokesService } from "../Services/PokesService"
import { Pop } from "../Utils/Pop"


function _drawPokemon(){

}

export class PokesController{
    constructor(){
        this.getMons()
    }

    async getMons(){
        try {
            await pokesService.getMons()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }




}