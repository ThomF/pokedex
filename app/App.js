import { PokesController } from "./Controllers/PokesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  pokesController = new PokesController()
}

window["app"] = new App();
