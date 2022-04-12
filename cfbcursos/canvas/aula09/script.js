let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
function desenho(){
    ctx.clearRect(0,0,500,500)
    //x1 y1, x2 y2 ,raio
    ctx.moveTo(0,0)
    ctx.lineTo(100,100)
    ctx.arcTo(250,250,500,0,30)
    ctx.lineTo(500,0)
    x = ctx.closePath()
    ctx.stroke()
}
desenho()