
let btnLiquidar = document.getElementById("btnLiquidar")
let tiquete = document.getElementById("tiquete")

btnLiquidar.addEventListener("click", function liquidar(){
  let destino = document.getElementById("destino").value
  let pasajeros = document.getElementById("pasajeros").value
  let equipaje = document.getElementById("equipaje").value
  let silla = document.getElementById("silla").value
  let valorEquipaje = 0
  let valorTotal = 0
 
 
  
    let valorPasajero = destino * pasajeros
  
  if(equipaje > 50)
  {
   valorEquipaje = (equipaje-50)*15000
  }
  else
  {
   valorEquipaje = 0
  }
  if(silla=="Normal")
  {
   valorTotal = valorPasajero + valorEquipaje + 0
  }
  if(silla == "Ejecutiva")
  {
    valorTotal = valorPasajero + valorEquipaje + 20000
  }
  if(silla =="VIP")
  {
    valorTotal = valorPasajero + valorEquipaje + 40000
  }

  tiquete.innerHTML = ` <br> <img src="./media/Tiquete.jpg" >
   <br> <h1>Valor Pasajeros: ${valorPasajero} </h1>
   <br> <h1>Valor Equipaje: ${valorEquipaje} </h1>
   <br> <h1>Tipo de silla: ${silla} </h1>
   <br> <h1>Valor Total: ${valorTotal} </h1>  ` 


})







