const hourA = document.getElementById("hour");
const minA = document.getElementById("min");
const secA = document.getElementById("sec");
const ampmA = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }

     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;


    hourA.innerText = h;
    minA.innerText = m;
    secA.innerText = s;
    ampmA.innerText = ampm;

    setTimeout(()=>{
        clock();
    },1000)
}

clock();
