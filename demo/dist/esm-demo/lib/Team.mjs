import Monster from "./Monster";
export default class Team {
    constructor({ firstName, secondName, thirdName }) {
        this.first = new Monster({ name: firstName });
        this.second = new Monster({ name: secondName });
        this.third = new Monster({ name: thirdName });
    }
    toString() {
        return `[ ${this.toArray().map(i => i.toString()).join(', ')} ]`;
    }
    toArray() {
        return [this.first, this.second, this.third];
    }
}
