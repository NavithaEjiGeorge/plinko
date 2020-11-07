const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisionHeight=300;
var ground
plinkos=[]
divisions=[]
particles=[]
function setup() {
  createCanvas(1350,660);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(680,660,1400,20)

for (var k=0;k<=width;k=k+80){
  divisions.push(new Division(k, height-divisionHeight/2, 19, divisionHeight) )
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,50,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,100,10))
  }
  for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,150,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,200,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,250,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,300,10))
  }
  Engine.run(engine); 

}

function draw() {
  background(0);  
  Engine.update(engine);
 
  if(frameCount % 15 === 0){
    particle = new Particle(random(10,1340),0,10);
    particles.push(particle);
  }
  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j=j+1){
    plinkos[j].display()
  }
  


for (var j = 0; j < particles.length; j++ ){
  particles[j].display();
}  
ground.display()
textSize(30)
text(1,30,400)
text(2,110,400)
text(3,190,400)
text(4,270,400)
text(5,350,400)
text(6,430,400)
text(7,510,400)
text(8,590,400)
text(9,670,400)
text(10,740,400)
text(11,820,400)
text(12,900,400)
text(13,980,400)
text(14,1060,400)
text(15,1140,400)
text(16,1220,400)

}