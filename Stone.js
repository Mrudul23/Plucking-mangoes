class stone {
    constructor(x,y,radius){
        var options = {
            density : 1.2,
            isStatic:false,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body)
        this.image = loadImage("stone (2).png");
        
        
    }
    display(){
        
        //imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        
    }
}