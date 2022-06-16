function love(){
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    if(first == ""){
        alert('Please enter your name');
       }else if (first.length <=2 ) {
        alert('Min lenght is 3')
       }else if(!isNaN(first)){
        alert('Numbers are not allowed');
       }
     
       else if(second == ""){
        alert('Please enter your love name');
       }else if (second.length <=2 ) {
        alert('Min lenght is 3')
       }else if(!isNaN(second)){
        alert('Numbers are not allowed');
       }
       else{    
        var loveCal = Math.floor(Math.random()*100)+1;
        document.querySelector("img").setAttribute("src", "https://source.unsplash.com/200x200/?love");
        document.querySelector("form").classList.add("smooth");
        document.querySelector("h1").classList.add("smooth");
        setTimeout(() => {
        document.querySelector("h1").classList.remove("smooth");
        }, 500);
        document.querySelector("h2").classList.add("smooth");
        setTimeout(() => {
        document.querySelector("h2").classList.remove("smooth");
        }, 500);
        document.querySelector("h1").classList.add("smooth1");
        document.querySelector("h2").classList.add("smooth1");
        document.querySelector(".th").classList.add("load");
        setTimeout(() => {
        document.querySelector(".th").classList.remove("load");
        }, 2000);
        if(loveCal>90){
        document.querySelector("h1").innerHTML= "Your Love score is: "+loveCal+"%";
        document.querySelector("h2").innerHTML= first +" " +second+ " are a great couples";
        }
        else if
        (loveCal>60 && loveCal<90){
        document.querySelector("h1").innerHTML= "Your Love score is: "+loveCal+"%";
        document.querySelector("h2").innerHTML= first +" " +second+ " are a vey good couples";
        } 
        else{
        document.querySelector("h1").innerHTML= "Your Love score is: "+loveCal+"%";
        document.querySelector("h2").innerHTML= first +" " +second+ " are a good couples";
        } 
    }
   

}