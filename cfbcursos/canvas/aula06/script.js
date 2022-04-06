let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
let px = 0
let py = 10
let l_Ret = a_Ret = 50
let anima
let l_canvas = a_canvas = 500
let dx = 1
function desenha(){
    ctx.clearRect(0,0,l_canvas,a_canvas)
    
    ctx.fillStyle='red'
    ctx.fillRect(px,py,l_Ret,a_Ret)
    ctx.lineWidth=3
    ctx.stokeStyle ='#000'
    ctx.strokeRect(px,py,l_Ret,a_Ret)
   
   px+=dx
   anima=requestAnimationFrame(desenha)
   if(px+l_Ret>=l_canvas)
   dx = -1
   if(px<=0)
   dx=1
}
desenha()