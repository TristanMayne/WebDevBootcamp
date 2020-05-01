var total = document.querySelector("#total");
var onePet = document.querySelector("#onePet");
var twoPet = document.querySelector("#twoPet");
var petPrice = 0;

onePet.addEventListener("click",function(){
    petPrice = 75;
    total.textContent = petPrice;
});

twoPet.addEventListener("click",function(){
    total.textContent = petPrice+15;
});

function total(petPrice){
    return petPrice;
};