import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js"



class SandboxPokesService{
setActivePokemon(nameId) {
    let foundMon = appState.myPokes.find(p => p.name == nameId)
    appState.poke = null
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
    console.log('[new Poke]',caughtPoke)
    appState.myPokes.push(caughtPoke)
    appState.emit('myPokes')
    appState.poke = caughtPoke

}

// async releasePokemon(monId){
//     let res = await sandboxApi.delete(`/thomf/pokemon/${monId}`)
//     let monIndex = appState.myPokes.findIndex(mon => mon.name == monId)
//     appState.myPokes.splice(monIndex, 1)
//     appState.emit('myPokes')
//     appState.poke = null

// }



}

export const sandboxPokesService = new SandboxPokesService()