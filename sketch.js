var ball;
var database,pos;
function setup(){
    createCanvas(500,500);
database=firebase.database();
var ballpos=database.ref("Ball/Position");
ballpos.on("value",readop,showerror);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "indigo";
}

function draw(){
    background("green");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("Ball/Position").set({
       x:ball.x+x,
       y:ball.y+y
   });
   
}
function readop(data){
pos=data.val();
ball.x=pos.x
ball.y=pos.y
}
function showerror(){
console.log ("error");    
}
