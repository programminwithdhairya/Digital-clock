let day 
let time 
let sec
let date 

const dates = {weekday: 'long' , year: 'numeric' , month:'long' , day: 'numeric'}

function addzero(){
    if (sec < 10){
        time = day.getHours()  + ":" + day.getMinutes() + ":" + `0${sec}`
    }
    else{
        time = day.getHours()  + ":" + day.getMinutes() + ":" + sec
    }
}

setInterval(() => {
    day = new Date()
    sec = day.getSeconds()
    addzero()
    date = day.toLocaleString(undefined , dates)
    document.getElementById('currentTime').innerHTML = date + '<br> on ' +  time 
}, 1000);