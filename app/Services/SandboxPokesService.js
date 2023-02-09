import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js"



class SandboxPokesService{
setActivePokemon(name) {

}

async getMyPoke(){
    const res = await sandboxApi.get('thomf/pokemon')
    console.log('[Get my Pokemon]', res.data);

    appState.myPokes = res.data.map(p => new Poke(p))
}

async createPoke(){
    const res = await sandboxApi.post('/thomf/pokemon', appState.poke)
    console.log('[catching pokemon]', res.data)

    let caughtPoke = new Poke(res.data)
    appState.myPokes.push(caughtPoke)
    appState.emit('myPoke')
    appState.poke = caughtPoke

}



}

export const sandboxPokesService = new SandboxPokesService()