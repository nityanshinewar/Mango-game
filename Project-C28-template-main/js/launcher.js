
    class Launcher{
        constructor(bodyA,pointB){
         var options={
             bodyA:bodyA,
             pointB:pointB,
             stiffness:0.05,
             length:10
        }
        this.chain=Constraint.create(options)
        this.pointB=pointB;
        World.add(world,this.chain);
        }
        display(){

            if (this.chain.bodyA){
            push()
            var pa=this.chain.bodyA.position;
            var pb=this.pointB;
            stroke("black");
           strokeWeight(5);
           line(pa.x,pa.y,pb.x,pb.y);
           pop();
        }
        }
        
        fly(){
            this.chain.bodyA=null;
        }
        
        attach(body){
            this.chain.bodyA=body
        }
}