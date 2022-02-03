class Wall {
    constructor(x,y,width,height){
        
         var wall_options = {
            isStatic: true
        };

    this.body = Bodies.rectangle(x,y,width,height, wall_options );    
        this.width = width;
        this.height = height;
    World.add(world, this.body);    

    }

    show(){
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }


}