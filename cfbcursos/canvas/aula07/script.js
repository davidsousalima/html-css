let canvas = document.getElementById('desenho')
let ctx = canvas.getContext('2d')
/*Arc()
posição x
posição y
raio
angulo inicial
angulo final
sentido:
true = horário
false= antihorário
(PI/180)*angulo em graus
*/
function desenho(){
    ctx.fillStyle='#000'
    ctx.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,false)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle='#00f'
    ctx.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,true)
    ctx.fill()
}
desenho()