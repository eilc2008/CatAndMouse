var bgImg;
var cat;
var mouse;

function preload() {
    //Cargar aqui las imagenes

    bgImg = loadImage("images/garden.png");

    catImg1 = loadImage("images/tomOne.png");
    catAni = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg2 = loadImage("images/tomFour.png");

    mouseImg1 = loadImage("images/jerryOne.png");
    mouseAni = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg2 = loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(970,700);
    
    bg = createSprite(485,350);
    bg.addImage("Background",bgImg);

    //carga los sprites de Tom y Jerry

    cat = createSprite(850,600,10,10);
    cat.addImage("Tom",catImg1);
    cat.scale = 0.15;

    mouse = createSprite(150,600,10,10);
    mouse.addImage("Jerry",mouseImg1);
    mouse.scale = 0.1;
    
}

function draw() {

    background("black");
    //escribe la condición para verificar si Tom y Jerry chocan
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
            cat.velocityX = 0;
            cat.addImage("Tom2",catImg2);
            cat.changeAnimation("Tom2");
            
            mouse.addImage("Jerry2",mouseImg2);
            mouse.changeAnimation("Jerry2");
        }

    console.log(cat.x);
    //console.log(mouse.x);

    keyPressed();

    drawSprites();
}

function keyPressed(){
    //escribe aqui el código para la animación del movimiento y cambio
    if(keyDown("LEFT_ARROW")){
        cat.velocityX = -3;

        cat.addAnimation("TomAnimation",catAni);
        cat.changeAnimation("TomAnimation");

        mouse.addAnimation("JerryAnimation",mouseAni);
        mouse.changeAnimation("JerryAnimation");
    }
}