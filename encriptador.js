const campo_texto=document.querySelector("#texto-encriptado");
const campo_mensaje=document.querySelector("#texto-desencriptado")

const matriz_encriptado=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]
condicionesIniciales();


function btnEncriptar(){
    let texto=Encriptar(campo_texto.value);  //con esto se captura el valor del texto 
    campo_mensaje.value=texto;
    validacion(texto);
}

function btnDesencriptar(){
    let texto=Desencriptar(campo_texto.value);
    campo_mensaje.value=texto;
    validacion(texto);
 
}

function validacion(texto){
    if(texto==""){
        condicionesIniciales();
    }
    else{
        borrarMensajes();
    }
    return;
}

function Desencriptar(fraseEncriptada){
    
    for(let i=0; i<matriz_encriptado.length; i++){
        if(fraseEncriptada.length>=matriz_encriptado[i][1].length){
            fraseEncriptada=transformacion(fraseEncriptada,i);     
        }
    } 
    return fraseEncriptada;
}

function Encriptar(fraseEncriptada){
    for(let i=0; i<matriz_encriptado.length; i++){
       if(fraseEncriptada.includes(matriz_encriptado[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                matriz_encriptado[i][0],
                matriz_encriptado[i][1]
            )
       }
    }
 
    return fraseEncriptada;
}

function copiar(){
    if(campo_mensaje.value=="Mensaje copiado"){}
    else{
        navigator.clipboard.writeText(campo_mensaje.value);
        if(campo_mensaje.value==""){
            campo_mensaje.value="";
        }
        else{
            campo_mensaje.value="Mensaje copiado";
        }
    }
    return;
}
          
function transformacion(fraseEncriptada,x){
    let transformacion="";

    for(let i=0; i<=fraseEncriptada.length; i++){
      
        if(i<=fraseEncriptada.length-matriz_encriptado[x][1].length){

            if(fraseEncriptada.substr(i,matriz_encriptado[x][1].length)==matriz_encriptado[x][1]){
                transformacion=transformacion+matriz_encriptado[x][0];
                i=i+matriz_encriptado[x][1].length-1;
             }
            else{
                transformacion=transformacion+fraseEncriptada.substr(i,1);
            }
        }
        else{
            transformacion=transformacion+fraseEncriptada.substr(i,matriz_encriptado[x][1].length-1);
            break
        }
    }
    
    return transformacion;
} 

function borrarMensajes() {
    asignarTextoElemnto("p",` `);
    asignarTextoElemnto("h5"," ");
    document.getElementById("texto-desencriptado").style.background="white";
}

function condicionesIniciales(){
    asignarTextoElemnto("p",`Ingresa un mensaje, usa encriptar o desencriptar`);
    asignarTextoElemnto("h5","Parece que no se a encontrado ningun texto");
    document.getElementById("texto-desencriptado").style.background="white";
    document.getElementById("texto-desencriptado").style.backgroundImage="url(imagenes/Muñeco.png)";
    document.getElementById("texto-desencriptado").style.backgroundRepeat="no-repeat"
    document.getElementById("texto-desencriptado").style.backgroundPositionX="20px";
    document.getElementById("texto-desencriptado").style.backgroundPositionY="50px";
}

function asignarTextoElemnto(elemento,texto){
    let elemntoHTML=document.querySelector(elemento);
    elemntoHTML.innerHTML=texto;
    return;
}
