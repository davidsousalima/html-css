let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
let cores = new Image()
cores.src = 'cores.jpg'
let numSprite = 0
let Limage = 0
let largSprite = 0
let posIniX = 0
let numSpries = 4
cores.addEventListener( 'load',()=>{
   Limage = cores.width
   largSprite = Limage/numSpries
   posIniX = largSprite*numSprite
    ctx.drawImage(cores,posIniciX,0,largSprite,50,0,0,200,200)
    //imagem , X inicial Recorte, y inicial Recorte, largura do recorte, altura do recorte, posoção x, posição y, largura da image , altura da imagem
})
let anima= setInterval(() => {
    numSprite++
    if(numSprite>4)
    numSprite=0
    posIniX = largSprite*numSprite
    ctx.drawImage(cores,numSprite,0,largSprite,50,0,0,200,200)
}, 1000);