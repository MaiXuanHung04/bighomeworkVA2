const selector1 = document.getElementById('selector1');
const selector2 = document.getElementById('selector2');
const selector3 = document.getElementById('selector3');
const selector4 = document.getElementById('selector4');
const selector5 = document.getElementById('selector5');


var listIteam = document.getElementById('list-iteam1');
var listIteam2 = document.getElementById('list-iteam2');
var listIteam3 = document.getElementById('list-iteam3');
var listIteam4 = document.getElementById('list-iteam4');
var listIteam5 = document.getElementById('list-iteam5');


listIteam.addEventListener('click', function(){
    selector2.classList.toggle('active');
   
});

listIteam2.addEventListener('click', function(){
   
    selector3.classList.toggle('active');
});

listIteam3.addEventListener('click', function(){
   
    selector4.classList.toggle('active');
});

listIteam4.addEventListener('click', function(){
   
    selector5.classList.toggle('active');
});

listIteam5.addEventListener('click', function(){
   
    selector1.classList.toggle('active');
});

