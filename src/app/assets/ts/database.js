var main = /** @class */ (function () {
    function main(name) {
        this.name = name;
    }
    main.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return main;
}());
var main1 = new main("hey");
main1.greet();
