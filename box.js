class Box{

    constructor( x, y ){
        this.body = Bodies.rectangle(x, y, 50 , 50)
        World.add(wo, this.body)
    }


    display(){
        var pos = this.body.position
       rect(pos.x, pos.y, 50,50) 
    }




}