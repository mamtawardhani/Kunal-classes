class Ground{
    constructor(){

        var options = {isStatic: true}
        this.body = Bodies.rectangle(300,550,600,20, options)
        World.add(wo, this.body)
    }

    display(){
        var pos = this.body.position
        rect(pos.x, pos.y, 600,20)
    }
}