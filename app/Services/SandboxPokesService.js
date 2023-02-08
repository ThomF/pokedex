import { appState } from "../AppState";
import { Poke } from "../Models/Poke";
import { sandboxApi } from "./AxiosService"



class SandboxPokesService{

async getMyPoke(){
    const res = await sandboxApi.get('thomf/pokemon')
    console.log('[Get my Pokemon]', res.data);

    appState.myPoke = res.data.map(p => new Poke(p))
}

async createPoke(){
    const res = await sandboxApi.post('/thomf/pokemon', appState.poke)
    console.log('[catching pokemon]', res.data)

    let caughtPoke = new Poke(res.data)
    appState.myPoke.push(caughtPoke)
    appState.emit('myPoke')
    appState.poke = caughtPoke

}

}

export const sandboxPokesService = new SandboxPokesService()