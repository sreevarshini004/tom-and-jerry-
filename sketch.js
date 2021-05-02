var Canvas , bg;
var cat , catImg1 , catImg2 , catImg3 ;
var mouse, mouseImg1 , mouseImg2 , mouseImg3 ;


function preload() {
    //load the images here
bg = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation ("images/cat2.png" , "images/cat3.png");
catImg3 = loadImage("images/cat4.png");
mouseImg1 = loadAnimation ("images/mouse1.png");
mouseImg2 = loadAnimation ("images/mouse2.png" , "images/mouse3,png");
mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(870,600);
 cat.addAnimation("tomsleeping",catImg1);
 cat.scale = 0.2;
 mouse = createSprite(200,600);
 mouse.addAnimation("jerrystanding",mouseImg1);
 mouse.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityx = 0;
        cat.addAnimation("tomlaugh",catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("tomlaugh");
        mouse.addAnimation("jerrylaugh",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("jerrylaugh");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityx = -5;
        cat.addAnimation("tomrun",catImg2);
        cat.changeAnimation("tomrun");
        mouse.addAnimation("jerrytease",mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerrytease");
    }

}
