import { BaseComponent } from './../../base';
export class ImageComponent extends BaseComponent<HTMLElement> {

    constructor(title: string, url: string){
        super( `
        <section class="image">
            <div class="image-wrapper"><img class="image-thumbnail"></div>
            <p class="image-title"></p>
        </section>
        ` );

        const imageEl = this.element.querySelector('.image-thumbnail')! as HTMLImageElement;
        imageEl.src = url;
        imageEl.alt = title;

        const titleEl = this.element.querySelector('.image-title')! as HTMLParagraphElement; // p tag
        titleEl.textContent = title;
    }
} 