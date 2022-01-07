// Merci de respecter mon travail et ne pas copier ce script.
// Script créé par Timothé Sévigny
//timsev.tk/script
//tscopy.github.io/tscopy.js


function tscopy() {
  var imgs = document.getElementsByTagName("img");
  for(var i=0; i<imgs.length; i++)
  imgs[i].oncontextmenu = msg;
}



function msg() {
  window.alert("La copie d'images est interdite sur ce site./nPour plus d'informations visitez timsev.tk");return false;
}
