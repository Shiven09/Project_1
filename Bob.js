class Bob{
  constructor(x,y,width){
      var options ={
          isStatic : false,
          friction:0.1,
          restitution:1,
          
      }
      this.body=Matter.Bodies.circle(x,y,width,options);
      this.width = width;
      
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("blue");
      strokeWeight(2);
      ellipse(pos.x,pos.y,this.width,this.width)
      pop();
  }
  }
  