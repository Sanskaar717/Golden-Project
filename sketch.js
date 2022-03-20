var player;
var h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11;
var v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11;
var player, playerI, fL, fLI, gM, gMI;

function preload(){
    playerI = loadImage("player.png");
    fLI = loadImage("Finish line.png");
    gMI = loadImage("Game over.png");
}

function setup(){
    createCanvas(500,500);
    h1 = createSprite(250,20,460,5); 
    h2 = createSprite(250,480,460,5); 
    v1 = createSprite(20, 173, 5, 310);
    v2 = createSprite(20, 443, 5, 80);
    h3 = createSprite(60, 325, 80, 5);
    h10 = createSprite(60, 405, 80, 5);
    v3 = createSprite(480, 93, 5, 150);
    v4 = createSprite(480, 372, 5, 220);
    h4 = createSprite(145, 170, 250, 5);
    v5 = createSprite(100, 135, 5, 70);
    v6 = createSprite(180, 55, 5, 75);
    h5 = createSprite(220, 90, 75, 5);
    h6 = createSprite(145, 250, 80, 5);
    v7 = createSprite(185, 328, 5, 162);
    v8 = createSprite(270, 248, 5, 160);
    h7 = createSprite(265, 405, 170, 5);
    v9 = createSprite(350, 247, 5, 320);
    h8 = createSprite(380, 90, 70, 5);
    v10 = createSprite(415, 178, 5, 180);
    h9 = createSprite(447, 265, 70, 5);
    player = createSprite(45,370,15,15,15);
    player.addImage(playerI);
    player.scale = 0.07;
    fL = createSprite(490, 215, 10, 85);
    fL.addImage(fLI);
    fL.scale = 0.2;
    gM = createSprite(250, 250, 5, 5);
    gM.addImage(gMI);
    gM.scale = 1.2;
    gM.visible = false;

}

function draw(){
    background(0,255,255);
    giveColour();
    keyPressed1();
    isTouching();
    gameOver();

    stroke("black");
    textSize(15);
    text("Use arrow keys to move!", 185, 15);
    

    drawSprites();
}

function giveColour(){
    h1.shapeColor = "red";
    h2.shapeColor = "red";
    h3.shapeColor = "red";
    h4.shapeColor = "red";
    h5.shapeColor = "red";
    h6.shapeColor = "red";
    h7.shapeColor = "red";
    h8.shapeColor = "red";
    h9.shapeColor = "red";
    h10.shapeColor = "red";
    v1.shapeColor = "red";
    v2.shapeColor = "red";
    v3.shapeColor = "red";
    v4.shapeColor = "red";
    v5.shapeColor = "red";
    v6.shapeColor = "red";
    v7.shapeColor = "red";
    v8.shapeColor = "red";
    v9.shapeColor = "red";
    v10.shapeColor = "red";
}

function keyPressed1(){
    if(keyDown("UP")){
        player.y = player.y - 2;
    }
    if(keyDown("DOWN")){
        player.y = player.y + 2;
    }
    if(keyDown("LEFT")){
        player.x = player.x - 2;
    }
    if(keyDown("RIGHT")){
        player.x = player.x + 2;
    }    

}

function isTouching(){
    if(player.isTouching(h1)||player.isTouching(h2)||player.isTouching(h3)||player.isTouching(h4)||player.isTouching(h5)||player.isTouching(h6)||player.isTouching(h7)||player.isTouching(h8)||player.isTouching(h9)||player.isTouching(h10)||player.isTouching(v1)||player.isTouching(v2)||player.isTouching(v3)||player.isTouching(v4)||player.isTouching(v5)||player.isTouching(v6)||player.isTouching(v7)||player.isTouching(v8)||player.isTouching(v9)||player.isTouching(v10)){
        player.x = 45;
        player.y = 370;
    }
}

function gameOver(){
    if(player.isTouching(fL)){
        gM.visible = true;
    }
}