

class main {
    constructor() {
        this.name = "Matthew"
    }

    fun (name) {
        console.log(name)
    }
    greet () {
        console.log(`Hello ${this.name}`)
    }
}

const main1 = new main();
main1.greet()
main1.fun('matthew')

