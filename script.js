let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let ampm = document.querySelector("#ampm");

setInterval(()=> {
    let date = new Date();
    let hours = date.getHours();
    let period = hours < 12 ? "AM" : "PM";
     hours = hours % 12 || 12;
  hrs.innerHTML = hours < 10 ? "0" + hours : "" + hours;  
  mins.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  
  secs.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();

   ampm.innerHTML = period;
}, 1000);