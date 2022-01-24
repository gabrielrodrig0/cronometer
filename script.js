/*Seleção de Contadores e do Botao*/
let botao = document.getElementById('iniciar');
let botao2 = document.getElementById('parar');
let botao3 = document.getElementById('reset');
let countSeg = 0;
let countMin = 0;
let countHora = 0;
let interval;

/*Atualiza o ponteiro de segundos*/

function atualizar (){
  let segundos = document.getElementById('segundos');
  let horas = document.getElementById('horas');
  let minutos = document.getElementById('minutos');
  segundos.innerHTML = ""+countSeg;
  countSeg++;
  
  if (segundos.innerHTML==='60'){
    countMin++;
    /*Conserta o delay de segundos*/
    countSeg=2;
    segundos.innerHTML = ""+countSeg;
    minutos.innerHTML = ""+countMin;
    
    if (minutos.innerHTML==='60'){
      countMin=0;
      minutos.innerHTML = ""+countMin;
      countHora++;
      horas.innerHTML = ""+countHora;
      if (horas.innerHTML==='24'){
        countHora=0;
        horas.innerHTML=""+countHora;
      }
    }
    
  }
}

/*Ativa cronômetro*/

function iniciar (){
  
interval = setInterval(atualizar, 1000);
  
}

/*Botao de parar*/
function parar (){

clearInterval(interval);

}

/*Botao de resetar cronômetro*/
function reset(){

  let horas = document.getElementById('horas');
  let minutos = document.getElementById('minutos');
  let segundos = document.getElementById('segundos');
  
  countSeg=0;
  countMin=0;
  countHora=0;
  
  horas.innerHTML = ""+countHora;
  minutos.innerHTML = ""+countMin;
  segundos.innerHTML = ""+countSeg;
  
}

botao.addEventListener('click', iniciar);
botao2.addEventListener('click', parar);
botao3.addEventListener('click', reset);