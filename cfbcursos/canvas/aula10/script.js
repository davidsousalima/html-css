let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
let nave = new Image()
nave.src = "nave.png"
nave.onload=()=>{
    ctx.drawImage(nave,0,0,50,50)
    
}
