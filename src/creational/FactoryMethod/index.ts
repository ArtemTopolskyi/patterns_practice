import { random } from '../../helpers';
import { AnimalShelter, CatShelter, DogShelter } from './Shelters';

class ClientCode {
  shelter: AnimalShelter;

  constructor() {
    if (random(50)) {
      this.shelter = new CatShelter();
    } else {
      this.shelter = new DogShelter();
    }
  }

  public run() {
    const pet = this.shelter.getAnimal();

    pet.sayHi();
  }
}

const client = new ClientCode();

client.run();
