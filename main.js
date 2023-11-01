canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
roverWidth=100;
roverHeight=90;
roverImage="rover.png";
roverX=10;
roverY=10;
nasamatriz=["nasa1.jpeg","nasa2.jpeg","nasa3.jpeg","nasa4.jpeg"];
aleatorio=Math.floor(Math.random()*4);
backgroundImage=nasamatriz[aleatorio];
function add(){
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;

    roverImgTag=new Image();
    roverImgTag.onload=uploadrover;
    roverImgTag.src=roverImage;    
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight);
    
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}

function up(){
    if(roverY>=0)
    {
        roverY=roverY-10;
        uploadBackground();
        uploadrover();

    }
}

function down(){
    if(roverY<=500)
    {
        roverY=roverY+10;
        uploadBackground();
        uploadrover();
        
    }
}

function left(){
    if(roverX>=0)
    {
        roverX=roverX-10;
        uploadBackground();
        uploadrover();
        
    }
}

function right(){
    if(roverX<=700)
    {
        roverX=roverX+10;
        uploadBackground();
        uploadrover();
        
    }
}













