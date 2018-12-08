class Greeter {
    constructor(private greeting: string) {
    }

    public greet(subject: { name: string }) {
        console.log(`${this.greeting} ${subject.name}!`)
    }
}

const greeter = new Greeter("Hello");

greeter.greet({ name: 'World' });