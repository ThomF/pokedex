import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { CaughtPoke } from "../Models/CaughtPokemon.js";

import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js"



class SandboxPokesService{
async setActivePokemon(nameId) {
    console.log('Almost set')
    let foundMon = appState.myPokes.find(p => p.name == nameId)
    appState.poke = null
}

async getMyPoke(){
    const res = await sandboxApi.get('thomf/pokemon')
    console.log('[Get my Pokemon]', res.data);

    appState.myPokes = res.data.map(p => new CaughtPoke(p))
}

async createPoke(){
    const res = await sandboxApi.post('/thomf/pokemon', appState.poke)
    console.log('[catching pokemon]', res.data)


    // NOTE Wont work till I set to the app state?
    let caughtPokemon = new CaughtPoke(res.data)
    console.log('[new Poke]', CaughtPoke)
    // appState.myPokes.push(CaughtPoke)
    // appState.emit('myPokes')
    // appState.myPokes = caughtPokemon


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