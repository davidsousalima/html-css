let px = 0
let anima
function desenhar(){
    let canvas = document.getElementById('desenho1')
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,500,500)
    ctx.fillStyle='red'
    ctx.fillRect(px,0,50,50)
   
   px++
   anima=requestAnimationFrame(desenhar)
}