import { ContactInterface } from "./ContactInterface";


export class ListContact {
    constructor(private container: HTMLUListElement) { }

    render(item: ContactInterface, pos: 'start' | 'end') {
        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = item.toString();
        li.append(p);

        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}