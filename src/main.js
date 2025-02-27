const allPokemonOnData= window.POKEMON;
window.allPokemonOnData= allPokemonOnData;
//Cartas
//Llama al espacio del html para mostrar los resultados
const showCardsComplete = document.getElementById("results");
const showPercentajes = document.getElementById("calculation");
function actualizar(){location.reload(true);}

const pokemonCards =(allPokemonOnData)=>{
//Donde se creará la tarjeta
let pokemonCards="";
let count=0;
//Recorre la data completa, element es el nombre que le asigna a cada elemento que contiene la data
allPokemonOnData.forEach((element=>{
//concatenamos para que vaya sumando una tarjeta tras otra
pokemonCards +=
  //creamos divs uno muestra la imagen y otro un espacio de texto para el nombre
 `<div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
     <img src="${element.img}" alt="imagenPokemon">
     <h4>${element.name}</h4>
 </div>
   <div class="flip-card-back">
         <h3>${element.name}</h3>
         <h5>Spawn: ${((element.spawn_chance)*100).toFixed(0)}%</h5>
         <h5>Hora de Aparición: ${element.spawn_time}</h5>
         <h5>Caramelos para evolución: ${element.candy_count}</h5>
   </div>
 </div>
</div>`
  //imprimimos en el espacio results lo que le añadimos a pokemonCards
showCardsComplete.innerHTML= pokemonCards;
count = count +1;
let percentaje= (count/151)*100;
let calculate = "         Esta selección corresponde a un "+percentaje.toFixed(0)+ "% de los Pokemon de la región Kanto"
showPercentajes.innerHTML= calculate;

}))
}
pokemonCards(allPokemonOnData)


//Selects
const abcSelect= document.getElementById("alphabeticOrder");
abcSelect.addEventListener('change',()=>{
  const valorAbc= abcSelect.value;
  let resultAbc= window.orderABC(allPokemonOnData, valorAbc);
  pokemonCards(resultAbc);
})


const typeSelect= document.getElementById("filterType");
typeSelect.addEventListener('change', ()=>{
  const valorType= typeSelect.value;
  let resultType= window.filterByType(allPokemonOnData, valorType);
  pokemonCards(resultType);
})
window.typeSelect= typeSelect

const eggSelect= document.getElementById("filterEgg");
eggSelect.addEventListener('change', ()=>{
  const valorEgg= eggSelect.value;
  let resultEgg=window.filterByEgg(allPokemonOnData, valorEgg);
  pokemonCards(resultEgg);
})

const weaknessesSelect= document.getElementById("filterWeaknesses");
weaknessesSelect.addEventListener('change', ()=>{
  const valorWeaknesses= weaknessesSelect.value;
  let resultWeaknesses=window.filterByWeaknesses(allPokemonOnData, valorWeaknesses);
  pokemonCards(resultWeaknesses);
})