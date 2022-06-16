setInterval (() => {
  d= new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  h= d.getHours();
  m= d.getMinutes();
  s=d.getSeconds();
  hrotation=30*h+m/2;
  mrotation= 6*m;
  srotation= 6*s;

  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform= `rotate(${mrotation}deg)`;
  sec.style.transform= `rotate(${srotation}deg)`;

  document.querySelector(".date").innerHTML=days[d.getDay()] + "<br>" + d.getDate() +  "-" + months[d.getMonth()]+"-" +d.getFullYear();
  if(h>12){
    h=24-h;
  document.querySelector(".time").innerHTML=h+":"+d.getMinutes()+":"+d.getSeconds()+" PM";
  }
  else{
    document.querySelector(".time").innerHTML=h+":"+d.getMinutes()+":"+d.getSeconds()+"AM";
  }
}, 1000);