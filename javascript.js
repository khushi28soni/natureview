var nature = document.getElementById('nature');
let btn = document.getElementById('btn');
let light = false;
function change(){
    if(light==false){
        nature.setAttribute("src","sunrise.png");
        light = true;
        btn.innerHTML = "Sunrise View";
    }
    else{
         nature.setAttribute("src","sunset.webp");
         light = false;
         btn.innerHTML = "Sunset View";
    }
}