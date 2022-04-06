function desenhar(){
    let px = 50
    let py = 50
    let canvas = document.getElementById('desenho1')
    let ctx = canvas.getContext('2d')
    ctx.moveTo(0,0)
    ctx.lineTo(250,250)
    ctx.lineTo(400,250)
    ctx.moveTo(250,250)
    ctx.lineTo(400,50)
    ctx.stroke()
}