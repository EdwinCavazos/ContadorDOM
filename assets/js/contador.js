var valorContador=0; //iniciamos en 0

const button1 = document.querySelector(".botIncrementar");
button1.addEventListener("click",function(){
    valorContador++; //incrementar de uno en uno 
    document.getElementById("contador").innerHTML=valorContador;
   
});
const button2 = document.querySelector(".botIncrementar2");
button2.addEventListener("click",function(){
    valorContador--; //derementar de uno en uno 
    document.getElementById("contador").innerHTML=valorContador;
   
});
const button3 = document.querySelector(".botIncrementar3");
button3.addEventListener("click",function(){
    valorContador=0;; //Resetear
    document.getElementById("contador").innerHTML=valorContador;
   
});