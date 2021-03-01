class hammer{
    constructor(x,y,width,height){
        var options = {
            restitution:2,
            density: 1.0,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push ()
        translate (this.body.position.x, this.body.position.y )
        rotate (this.body.angle)
  
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop ()
    }
 }
 