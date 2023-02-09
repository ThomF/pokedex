import { PokesController } from "./Controllers/PokesController.js";
import { SandboxPokesController } from "./Controllers/SandboxPokesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  pokesController = new PokesController()

  sandboxPokesController = new SandboxPokesController()
}

window["app"] = new App();
