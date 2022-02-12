"use strict"
alert("primero da 1 click en la imagen de la textura y después intenta arrastrarla hacia la caja")

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png")`;
});

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>cambiarTextura(i,e));
}

const cambiarTextura = (n,e)=>{
    e.dataTransfer.setData("textura",n);
}