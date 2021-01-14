class Rope{
    constructor(BodyA,BodyB){
        var options ={
        bodyA:BodyA,
        bodyB:BodyB
        }
        this.rope = Constraint.create(options);
         
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        push();
        strokeWeight(10);
        line(posA.x,posA.y,posB.x,posB.y-100);
        pop();
    }
    }
    