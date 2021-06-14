export class Cat {
  name: string;
  color: string;
  age: number;
  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  purr(): string {
    return `${this.name}, the cat, purrs...`;
  }
  meow(): string {
    return `${this.name}, the ${this.color} cat, meows!`;
  }
  attack(withSuccess: boolean): void {
    withSuccess ? console.log("You've been scratched!") : console.log(`Wow, ${this.name} missed you, how lucky!`);
  }
}

const cat = new Cat("Garfield", "orange", 12);

console.log(cat.purr());
console.log(cat.meow());
cat.attack(true);
