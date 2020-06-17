
class main {
    name: string
    constructor(name: string) {
        this.name = name
    }
    greet () {
        console.log(`Hello ${this.name}`)
    }
}

const main1 = new main("hey");
main1.greet()

