class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.03
        }
        this.pointB=pointB;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
}
fly(){
    this.sling.bodyA=null;
}
attach(bodyA){
    this.sling.bodyA=bodyA;
}
    display(){
        if (this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
       
        strokeWeight(2);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}
}
