import { ContactInterface } from "./ContactInterface";

export class ContactClass implements ContactInterface {
    constructor(private name: string,
        private phone: string,
        private email: string,
        private suggestion: string
    ) { }
    toString(): string {
        return `Your name: ${this.name}
                Your phone: ${this.phone}
                Your email: ${this.email}
                Your suggestion: ${this.suggestion}`
    }
}