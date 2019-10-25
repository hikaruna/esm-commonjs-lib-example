import Monster from "./Monster";

export default class Team {
  readonly first: Monster
  readonly second: Monster
  readonly third: Monster

  constructor({ firstName, secondName, thirdName }: InitParams) {
    this.first = new Monster({ name: firstName });
    this.second = new Monster({ name: secondName });
    this.third = new Monster({ name: thirdName });
  }

  toString(): string {
    return `[ ${this.toArray().map(i => i.toString()).join(', ')} ]`;
  }

  toArray(): Monster[] {
    return [this.first, this.second, this.third];
  }
}

type InitParams = {
  firstName: string,
  secondName: string,
  thirdName: string
}
