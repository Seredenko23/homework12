class Utilities {
    static clear(place: HTMLElement): void {
        while (place.firstChild) {
            place.firstChild.remove()
        }
    }
}

export default Utilities;