import HTMLRenderer from "./HTMLRenderer";

function createAlert(text: string, type:string, place: HTMLElement): void {
    const alert: HTMLElement = HTMLRenderer.render({
        tag: 'div',
        classNames: ['alert', `alert-${type}`],
        text: text,
    });
    place.prepend(alert);
    let timer = setTimeout(() => {
        alert.remove();
    },4000);
    alert.addEventListener('click', () => {
        clearTimeout(timer);
        alert.remove();
    })
}

export default createAlert;