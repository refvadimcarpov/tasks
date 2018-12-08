var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function (subject) {
        console.log(this.greeting + " " + subject.name + "!");
    };
    return Greeter;
}());
var greeter = new Greeter("Hello");
greeter.greet({ name: 'World' });
