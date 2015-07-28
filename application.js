var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

var pos = {x: 10, y: 10, vx: 10, vy: 10, sx: 10, sy: 10};
var pad = {x: (canvas.width / 2), y: (canvas.height / 2), sx: 20, sy: 80};
var interval;

drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);


function loop(){
    drawing.clearRect(0,0,canvas.width, canvas.height);
    
    pos.x = pos.x + pos.vx;
    pos.y = pos.y + pos.vy;
    
    if(pos.x > pad.x && pos.y > pad.y) {
        if(pos.x < (pad.x + pad.sx) && pos.y < (pad.y + pad.sy)) {
            pos.vx = pos.vx * -1;
        }
    }    
    
    if(pos.x >= canvas.width - 20) { pos.vx = pos.vx * -1; }
    if(pos.y >= canvas.height - 20) { pos.vy = pos.vy * -1; }
    if(pos.x <= 0) {pos.vx = pos.vx * -1; }
    if(pos.y <= 0) {pos.vy = pos.vy *-1; }
    
    drawing.fillRect(pad.x, pad.y, pad.sx, pad.sy);
    drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);
}

interval = setInterval(loop, 10);
