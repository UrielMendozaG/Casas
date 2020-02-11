import Data from "../Data/Data.js";

var updateData = new Event("updateData");

let position = 0;

export default function ParseText(num) {

  const getPosition = num => {
    // este codigo verifica que nunca sea menor que 0 
    if (position == 0 && Math.sign(num) == -1) {
      position += 0;
    } else {
      position += num;
    }
    return position;
  };

  position = getPosition(num);

  let dataUpdated = [];

  const parse = num => {
    let dataParsed = [];

    // titulo

    titulo = Data[position].titulo;

    let index = titulo.indexOf("n") + 2;

    titulo = titulo.substring(index, titulo.length);

    dataParsed.push(titulo);

    // colonia
    dataParsed.push(Data[position].colonia);

    // Ciudad y Estado
    let ciudad = Data[position].ciudad;
    let estado = Data[position].estado;

    dataParsed.push(ciudad + ", " + estado);

    // precio

    let precio = Data[position].precio;

    precio = precio.toString().split("");

    precio.splice(1, 0, ",");
    precio.splice(5, 0, ",");

    dataParsed.push("$ " + precio.join(""));
    // recamaras
    dataParsed.push(Data[position].recamaras);
    // baños
    dataParsed.push(Data[position].banos);
    // mt2
    dataParsed.push(Data[position].m2t);

    //data updated
    window.dispatchEvent(updateData);

    console.log(position);
    
    return dataParsed;
  };

  dataUpdated = parse(num);

  return dataUpdated;
}
