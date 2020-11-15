class Paper 

{
    constructor(x,y,r)
    {
         var options = {
             "restitution":0.3,
             friction:0.5,
             density:1.2


         }
      this.image = loadImage("paper.png")
      this.x=x;
      this.y=y;
      this.r=20;
      
      
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body); 
    }
    
  
    
     display()
  {
          var paperpos=this.body.position
          
          push()
          translate(paperpos.x, paperpos.y);
          rectMode(CENTER)
          strokeWeight(3);
          fill(255,0,255)
          ellipse(0,0,this.r, this.r);
          image(this.image, this.body.position.x, this.body.position.y,this.body.r);
          pop()
  }

  

}