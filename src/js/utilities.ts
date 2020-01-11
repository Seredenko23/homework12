class Utilities {
    static clear(place: HTMLElement) {
        while (place.firstChild) {
            place.firstChild.remove()
        }
    }
}

export default Utilities;