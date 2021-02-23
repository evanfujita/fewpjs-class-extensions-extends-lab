class Polygon {

    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        this.sides.reduce((total, num) =>  total + num
        )
    }
    

}

class Triangle extends Polygon {

    
}