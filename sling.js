class Sling{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:5
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    attach(body)
        {
            this.sling.bodyA=body
        }
    
    fly(){
        this.sling.bodyA = null;
    }
    display()
    {
      var pointA=this.sling.bodyA.position;
      var pointB=this.sling.bodyB.position;
      strokeWeight(3)
      line(pointA.x,pointA.y,pointB.x,pointB.y) 
    }
}