import { Component } from './components/base';
import { ImageComponent } from './components/page/item/image';
import { Composable, PageComponent } from './components/page/page';
import "./test.scss";

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title1', 'https://picsum.photos/600/300');
        this.page.addChild(image);
    }
}

// 정적으로 html에 정의
new App(document.querySelector('.document')! as HTMLElement);