let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
let jogador = new Image()
jogador.src ="jogador.png"
let numSprite = 0
let posInix = 0 
let Limage = 0
let LargSprite = 0
let numSpriteis = 4
jogador.addEventListener('load',()=>{
    LargSprite = jogador.width/numSpriteis
    altSprite = jogador.height/numSpriteis
    posInix = LargSprite*numSprite
    ctx.drawImage(jogador,posInix,0,LargSprite,altSprite,0,0,LargSprite,altSprite)
})
let anima = setInterval(()=>{
    ctx.clearRect(0,0,500,500)
    numSprite++
    if(numSprite>3)
    numSprite=0
    posInix=LargSprite*numSprite
    ctx.drawImage(jogador,posInix,0,LargSprite,altSprite,0,0,LargSprite,altSprite)
},200)