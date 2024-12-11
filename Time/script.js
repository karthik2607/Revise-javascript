function showTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("time").innerText=time;

}

setInterval(showTime,1000);