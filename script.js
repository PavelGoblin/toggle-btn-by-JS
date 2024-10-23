let modeBtn= document.querySelector(#mode)
let body = document.querySelector("body");
let currMode="light"
modeBtn.addEventListner ("click",() =>{
  if(currMode==="light")
  {
    currMode="dark";
  body.classList.add ="dark";
  body.classList.remove ="light"
  }else{
    currMode ="dark";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
  
});