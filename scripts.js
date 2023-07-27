var defaultValue=16;
var limit=defaultValue;
makeGrid(limit);


myRange.oninput =function(){
  const container = document.querySelector('#container');
  container.replaceChildren();
  var myValue = document.querySelector('#myRange');
  limit=myValue.value;
  makeGrid(limit);
  


  };


  
let isClicked=false;

function makeGrid(limit){
const container = document.querySelector('#container');
for(let i=0; i<limit; i++){
    const content = document.createElement('div');
    for(let j=0; j<limit; j++){
        const grid = document.createElement('div');
        grid.classList.add('content');
        content.appendChild(grid);
    }
    container.appendChild(content);

}
const divs=document.querySelectorAll('.content');

let x=500/limit;

let final=x.toString()+"px";

for (const color of divs) {
  color.style.width=final;
  color.style.height=final;
  color.addEventListener("mousedown", () => {
    isClicked=true;
    colorize(color);

  });
    color.addEventListener("mouseover", () => {
    colorize(color);
  });
    color.addEventListener("mouseup", () => {
    isClicked=false;
  });

}

}

let rong="default";
const black=document.querySelector('#black');
const dcolor=document.querySelector('#color');
const white=document.querySelector('#white');
const reset=document.querySelector('#reset');

black.addEventListener("click",() => {
  rong="default";
  removeClcked();
  black.classList.add("clicked");
});
dcolor.addEventListener("click",() => {
  rong="color";
  removeClcked();
  dcolor.classList.add("clicked");
});
white.addEventListener("click",() => {
  rong="white";
  removeClcked();
  white.classList.add("clicked");
});

reset.addEventListener("click",() => {
  const container = document.querySelector('#container');
  container.replaceChildren();
  limit=defaultValue;
  makeGrid(limit);
  removeClcked();
});



function removeClcked(){
  const containerbuttons = document.querySelectorAll("button");
  for (const b of containerbuttons) {

    b.classList.remove("clicked");
  }

}


  function colorize(color){
    if (isClicked==true){
    if (rong=="default"){
    color.style.backgroundColor = "black";
    }
    else if(rong=="white"){
     color.style.backgroundColor = "white"; 
    }
    else if(rong=="color"){
      color.style.backgroundColor = getRandomColor();
    }
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }