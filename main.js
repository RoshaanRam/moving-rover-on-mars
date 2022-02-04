canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;


rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){

backgroundImg=new Image();
backgroundImg.onload=uploadback;
backgroundImg.src= background_image;

roverImg=new Image();
roverImg.onload=uploadrover;
roverImg.src= rover_image;
}

pictures_array=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"];
random_selector=Math.floor(Math.random()*4);
background_image=pictures_array[random_selector];




function uploadback(){
ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
ctx.drawImage(roverImg, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){

var keypressed=e.keyCode;

if(keypressed == '39'){
    right();
}

if(keypressed == '40'){
    down();
}

if(keypressed == '38'){
    up();
}

if(keypressed == '37'){
    left();
}
}

function up(){

if(rover_y >=0){
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed, x="  + rover_x + " | y = " +rover_y);
uploadback();
uploadrover();
}
}
function down(){

    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x="  + rover_x + " | y = " +rover_y);
    uploadback();
    uploadrover();
    }
    }
    function left(){

        if(rover_x >=0){
            rover_x = rover_x - 10;
            console.log("When left arrow is pressed, x="  + rover_x + " | y = " +rover_y);
        uploadback();
        uploadrover();
        }
        }
        function right(){

            if(rover_x <=700){
                rover_x = rover_x + 10;
                console.log("When right arrow is pressed, x="  + rover_x + " | y = " +rover_y);
            uploadback();
            uploadrover();
            }
            }