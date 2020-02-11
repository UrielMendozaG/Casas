import Parse from "../ParseText/ParseText.js";

export default function Text() {
  let titulo = document.getElementById("titulo");
  let colonia = document.getElementById("colonia");
  let ubicacion = document.getElementById("ubicacion");
  let precio = document.getElementById("precio");
  let habitaciones = document.getElementById("habitaciones");
  let banos = document.getElementById("banos");
  let metros = document.getElementById("metros");
  let metrosDiv = document.getElementById("metros-div")
  let casaImg = document.getElementById("img")
  
  // data por default
  const setData = obj => {
    titulo.innerHTML = obj[0];
    colonia.innerHTML = obj[1];
    ubicacion.innerHTML = obj[2];
    precio.innerHTML = obj[3];
    habitaciones.innerHTML = obj[4];
    banos.innerHTML = obj[5];
    
    if(obj[6] == 0){
      metrosDiv.style.display = "none";
    }else{
      metrosDiv.style.display = "flex";
      metros.innerHTML = obj[6] + "m2";
    }


    casaImg.src = obj[7]
  };

  let obj = Parse(0);
  setData(obj);

  // llamamos a parse text para que me regrese mi objeto listo

  const updateData = num => {
    obj = Parse(num);
    setData(obj);
  };

  window.addEventListener("nextClicked", () => updateData(1));
  window.addEventListener("backClicked", () => updateData(-1));
}
