// function definition

function getTime(){
    const time =new Date() /* to access the system time and date */

    console.log(time);

    const hour=time.getHours()
    const min=time.getMinutes()
    const sec=time.getSeconds()
    const mill=time.getMilliseconds()
    clock.innerHTML=`${hour}:${min}:${sec}:${mill}`

    setTimeout(()=>{
    getTime()},1000)
}

// getTime fn calling

getTime()