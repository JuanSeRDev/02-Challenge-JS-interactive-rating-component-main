"use strick"

/* //! ESTA OPCION NO FUNCIONO EN SU TOTALIDAD

const seleccion = document.querySelectorAll(".calificacion-n");
const clase = document.querySelectorAll(".number");

 seleccion.forEach((cadaNumero, i)=>{
    seleccion[i].addEventListener("click",()=>{
        if (clase[i].classList.contains("number")) {
            clase[i].classList.remove("number");
            clase[i].classList.add("active")
        } else {
            clase[i].classList.remove("active");
            clase[i].classList.add("number")
        }
    })
}) */

//*ESTA OPCION SI FUNCIONO CORRECTAMENTE PERO YA LO HICE CON CSS
const seleccion = document.querySelectorAll(".calificacion-n");
const clase = document.querySelectorAll(".number");

seleccion.forEach((cadaSeleccion, i)=>{
    seleccion[i].addEventListener("click",()=>{
        clase.forEach((cadaNumer, i)=>{
            clase[i].classList.remove("active");
            
        })
        clase[i].classList.add("active")
    })
})

const calificacion = document.querySelector(".calificacion");
const selected = document.querySelector(".selected");
const submitBTN = document.querySelector(".submit");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2")

calificacion.addEventListener("click", e=>{
    let numberSelecter = e.target.innerText;
    selected.innerText = numberSelecter
    if(numberSelecter > 0 || numberSelecter <=5){
        submitBTN.addEventListener("click",()=>{
            container.style.display = "none";
            container2.style.display ="flex"
        })
    }
});

