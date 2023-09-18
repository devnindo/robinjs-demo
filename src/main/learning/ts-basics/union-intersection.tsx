
type ID = number | string;

interface Colorful {
    color: string;
}
interface Shape {
    id: ID
    name: string;
}

type ColorfulShape = Colorful & Shape;
const shapeColorful:ColorfulShape = {
    color: "0xFFFF",
    name: "circle",
    id: 404
}


type ColorfulOrShape = Colorful | Shape;
const colorful:ColorfulOrShape = {color: "0xFFFF"}
