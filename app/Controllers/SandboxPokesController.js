import { appState } from "../AppState.js"

import { sandboxPokesService } from "../Services/SandboxPokesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawMyPokemon(){
    let template = ''
    let myMon = appState.myPokes
    myMon.forEach(p => template += p.SandboxPokeListTemplate)
    setHTML('myPokemon', template)

}


export class SandboxPokesController{
    constructor(){
        console.log('sandbox')
        this.getMyPoke()

        appState.on('myPoke', _drawMyPokemon)
    }

    async createPoke(){
        try {
            await sandboxPokesService.createPoke()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async getMyPoke(){
        try {
            await sandboxPokesService.getMyPoke()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    setActivePokemon(name){
        try {
            sandboxPokesService.setActivePokemon(name)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
    
}