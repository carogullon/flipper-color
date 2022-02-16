
// let body=document.getElementsByTagName("body");
// let btn = document.querySelector("#btn");
// let container = document.querySelector(".container");

// btn.addEventListener('click',(event)=>{
//     console.log(event, "hizo click");


//     container.innerHTML = `
//     <h3>Backgroundcolor is: red</h3>
//     `
//     document.body.style.backgroundColor= "red";
 
// })

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener('click', function(){
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent= colors[randomNumber]
});

const getRandomNumber = ()=>{
    return Math.floor(Math.random() * colors.length);
}