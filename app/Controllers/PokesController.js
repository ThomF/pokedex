import { appState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { pokesService } from "../Services/PokesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPokedex(){
    let template = ''
    appState.pokemons.forEach(p => template += Poke.PokeListTemplate(p))
    setHTML('pokemon', template)
}

function _drawPokemon(){
    setHTML('activePokemon', appState.poke.ActivePokemonTemplate)
}

export class PokesController{
    constructor(){
        this.getMons()
        //NOTE this watches for what is stored in the pokemons. grabs it 'pokemons'. then draws
        appState.on('pokemons', _drawPokedex)
        appState.on('poke', _drawPokemon)
    }

    async getMons(){
        try {
            await pokesService.getMons()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    setActivePokemon(url){
        console.log('working')
        try {
            pokesService.setActivePokemon(url)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }




}