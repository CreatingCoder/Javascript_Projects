var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

var movementInt;
var drawInt;



var player = {
    x: 0,
    y: 0,
    w: 40,
    h: 40,
    speed: 40, 
}


function start() {

movementInt = setInterval(movement, 1);
drawInt = setInterval(draw, 1);

}

function movement(){
    document.onkeydown = function(e){
        switch(e.keyCode){
            //w
            case 87:
                player.y -= player.speed;
                break;
            //s
            case 83:
                player.y += player.speed;
                break;
            //a
            case 65:
                player.x -= player.speed;
                break;
            //d
            case 68:
                player.x += player.speed;
                break;

            default:
                break;

        }
    }
}



function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.w, player.h);
}


