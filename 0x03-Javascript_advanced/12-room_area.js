let roomDimensions = {
    width: 50,
    length: 100,
};

function getArea() {
    return (this.width * this.length);
}

let boundGetArea = getArea.bind(roomDimensions);
