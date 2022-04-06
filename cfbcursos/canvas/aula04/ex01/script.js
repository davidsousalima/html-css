function desenha(){
    let canvas = document.getElementById('desenho')
    let draw = canvas.getContext('2d')
    draw.clearRect(0,0,500,500)
    draw.fillStyle ='red'
    draw.fillRect(0,0,50,50)
    
}