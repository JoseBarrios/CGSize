'use strict'

export default class CGSize {

    constructor(width = 100, height = 100) {
        this.width = width;
        this.height = height;
    }

    equalToSize(size) {
        return (this.width === size.width && this.height === size.height)
    }
}
