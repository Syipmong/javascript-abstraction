let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');

cnv.width = window.innerWidth
cnv.height = window.innerHeight
cnv.style.backgroundColor ='#333'

window.onload = function(){
    
    let circle = new Draw(cnv.width/2,cnv.height/2)
    circle.circle()
    
}


class Circle {
    constructor() {
        
    }
    circle(){
        throw new Error('This method must be implemented before initialization')
    }
}

class Draw extends Circle{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.radius = 100;
    }
    
    circle(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
        console.log('Circle drawn on canvas')
    }
}
