export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void,
}
/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element : T;

    constructor(htmlString: string){
        const tamplate = document.createElement('template');
        tamplate.innerHTML = htmlString;
        this.element = tamplate.content.firstElementChild! as T; // string으로 표기된 element
    }

    attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"){
        parent.insertAdjacentElement(position, this.element);
    }
}