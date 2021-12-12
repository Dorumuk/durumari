import { BaseComponent, Component } from "./../base";

export interface Composable {
    addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super(`
        <li draggable="true" class="page-item">
            <section class="page-item-body"></section>
            <div class="page-item-controls">
              <button class="close">&times;</button>
            </div>
        </li>`);
    }

    addChild(child: Component) {
        const container = this.element.querySelector(".page-item-body")! as HTMLElement;
        child.attachTo(container);
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super(`<ul class="page">This is Page Component</ul>`);
        // this.element.setAttribute('class', 'page');
        // this.element.textContent = "This is Page Component";
    }

    addChild(section: Component) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
    }
}
