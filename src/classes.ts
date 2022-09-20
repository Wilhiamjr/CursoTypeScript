class Person {
  readonly id: number;
  protected banco: string;
  name: string;
  private age: number;

  constructor(id: number, name: string, age: number, banco: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.banco = banco;
  }

  syMyName(): string {
    return this.name;
  }
}

// Maneira mais facil de escrever classe

class PersonRefect {
  constructor(
    readonly id: number,
    protected banco: string,
    name: string,
    private age: number
  ) {}
  syMyName(): string {
    return this.banco;
  }
}

const persoon = new Person(1, "Felipe", 28, "itau");

console.log(persoon.syMyName);

// Private só pode ser acessado pela propria classe
// protected só pode ser acessado pela classes e sub claesses
// readonly somente serva para leitura não pode alterar
