let counterElH=document.getElementById("counter-el-h")
let counterElG=document.getElementById("counter-el-g")
let counterH=0
let counterG=0

function plusOneH(){
  counterH+=1
  counterElH.textContent=counterH
}
function plusTwoH(){
  counterH+=2
  counterElH.textContent=counterH
}
function plusThreeH(){
  counterH+=3
  counterElH.textContent=counterH
}
function plusOneG(){
  counterG+=1
  counterElG.textContent=counterG
}
function plusTwoG(){
  counterG+=2
  counterElG.textContent=counterG
}
function plusThreeG(){
  counterG+=3
  counterElG.textContent=counterG
}

function resetCounter(){
  counterH=0
  counterG=0
  counterElH.textContent=0
  counterElG.textContent=0
}