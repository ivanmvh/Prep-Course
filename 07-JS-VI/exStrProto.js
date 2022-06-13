String.prototype.replEspXGui = function () {
   let resultado = ""
   const lon = this.length
   console.log ('lon= %d', lon)
   for (let i = 0; i < lon  ; i++){
      if (this[i] == " "){ 
         resultado = resultado + "-"
      } else {
         resultado = resultado + this[i]          
      }
      console.log(resultado)   
   }
   return resultado
}

var str = " Hola mi   hermano  ";
str = " Hola mi   primo  "
console.log(str)
var resul = str.replEspXGui()
console.log(resul)