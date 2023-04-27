
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const milesimos = document.getElementById('milesimos')

const relogio = setInterval(function time(){
    let dataHoje = new Date()
    let hr = dataHoje.getHours()
    let min = dataHoje.getMinutes()
    let s = dataHoje.getSeconds()
    let mil = dataHoje.getMilliseconds()

if(hr < 10 ) hr = '0' + hr
if(min < 10 ) min = '0' + min
if(s < 10 ) s = '0' + s

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
    milesimos.textContent = mil
})