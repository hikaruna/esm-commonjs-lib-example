export default class Monster {
  readonly name: string

  constructor({ name }: { name: string }) {
    this.name = name
  }

  toString(): string {
    return this.name;
  }
}
