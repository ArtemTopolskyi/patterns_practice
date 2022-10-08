export interface Pet {
  sayHi(): void;
}

export class Cat implements Pet {
  sayHi(): void {
    console.log('🐱: Meow');
  }
}

export class Dog implements Pet {
  sayHi(): void {
    console.log('🐕: Woof');
  }
}
