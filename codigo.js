let botones = document.getElementsByClassName("botones")
let pantalla = document.getElementsByClassName("pantalla")

function resultado(){
  pantalla[0].textContent =eval(pantalla[0].textContent)
}
for(let i = 0; i < botones.length; i++){
  botones[i].addEventListener('click', function(){
    if(botones[i].textContent =="C"){
      pantalla[0].textContent=""
    }else if(botones[i].textContent =="="){
      return resultado()
    } else{
      pantalla[0].textContent+=botones[i].textContent
    }

  })
}

