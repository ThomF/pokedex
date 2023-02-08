import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { pokeApi } from "./AxiosService.js";

class PokesService{
    
    async getPokeByIndex(index){
        const res = await pokeApi.get(index)
        console.log('[get by index]', res.data)

        appState.poke = new Poke(res.data)
        console.log('found the pokemon!', appState.poke )
    }


    async getMons(){
        const res = await pokeApi.get('pokemon?limit=100000&offset=0')
        console.log('[Get Pokemon]', res.data)
        appState.pokemons = res.data.results
    }
}


export const pokesService = new PokesService()