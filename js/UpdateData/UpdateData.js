import Parse from "../ParseText/ParseText.js";

export default function Text() {
  let titulo = document.getElementById("titulo");
  let colonia = document.getElementById("colonia");
  let ubicacion = document.getElementById("ubicacion");
  let precio = document.getElementById("precio");
  let habitaciones = document.getElementById("habitacions");
  let banos = document.getElementById("banos");
  let metros = document.getElementById("metros");


  // data por default

  let obj = Parse(0);
  
  // llamamos a parse text para que me regrese mi objeto listo

  const updateData = num => {
      obj = Parse(num);
      
      
  }


  window.addEventListener("nextClicked", () => updateData(1));
  window.addEventListener("backClicked", () => updateData(-1));


}
