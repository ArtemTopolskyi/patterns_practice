import { Pet, Cat, Dog } from './Pets';

export abstract class AnimalShelter {
  abstract getAnimal(): Pet
}

export class CatShelter extends AnimalShelter {
  getAnimal(): Pet {
    return new Cat();
  }
}

export class DogShelter extends AnimalShelter {
  getAnimal(): Pet {
    return new Dog();
  }
}
