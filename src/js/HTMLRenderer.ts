import HTMLRenderOptions from "../models/HTMLRenderOptions";
import Atrribute from "../models/atrributes";

class HTMLRenderer {
    static render(options: HTMLRenderOptions): HTMLElement {
        let {tag, classNames, atrributes, text} = options;
        let elem: HTMLElement = document.createElement(tag);
        if(classNames) classNames.forEach((className: string) => { elem.classList.add(className) });
        if(atrributes) atrributes.forEach((atrr: Atrribute) => { elem.setAttribute(atrr.name, atrr.value) });
        if(text) elem.textContent = text;
        return elem;
    }
}

export default HTMLRenderer