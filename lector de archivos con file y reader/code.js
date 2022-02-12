"use strict"

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
    cambiarEstilo(e.srcElement,"#444");
})

zona.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    cambiarEstilo(e.srcElement,"#888");
})

zona.addEventListener("drop",e=>{
    e.preventDefault();
    cambiarEstilo(e.srcElement,"#888")
    cargarArchivo(e.dataTransfer.files[0]);
})

const cambiarEstilo=(obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = (ar) =>{
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load",e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result;
});
}
