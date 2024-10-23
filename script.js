/*let modeBtn= document.querySelector("#mode")
let body = document.querySelector("body");
let currMode="light"
  modeBtn.addEventListener("click",()=>{
    if(currMode==="light")
      {
        currMode="dark";
      body.classList.add ="dark";
      body.classList.remove ="light"
      }else{
        currMode ="dark";
        body.classList.add="light"
        body.classList.remove ="dark";
      }
      console.log(currMode);
      
    });

  */
 let modeBtn = document.querySelector("#mode");
 let currMode="light";
 let body = document.querySelector("body");
 modeBtn.addEventListener("click",() => {
  if(currMode==="light"){
    currMode="dark";
    //document.querySelector("body").style.backgroundColor ="black";
    body.classList.add("dark");
    body.classList.remove("light")
  }else{
    currMode="light";
    //document.querySelector("body").style.backgroundColor ="white";
    body.classList.add("light");
    body.classList.remove("dark")
  }
  console.log(currMode);
  
  //console.log("you are trying to change mode");
  
 })