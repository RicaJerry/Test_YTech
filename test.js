console.log("ça marche");

function afficherToto() {
  document.getElementById('affToto').innerHTML = "Toto"
}

function afficherVal() {
  const a = document.getElementById('val').value;
  console.log(a);
  document.getElementById('aff').innerHTML = a;
}

function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}

function checkPairImp() {
  const a = document.getElementById('pImp').value;
  if(a%2 == 0) {
    document.getElementById('affPImp').innerHTML = "pair";
  }else {
    document.getElementById('affPImp').innerHTML = "impair";
  }
  
}


const calcule = () => {
  var a = document.getElementById('a').value || 0;
  var b = document.getElementById('b').value || 0;
  document.getElementById('c').innerHTML = parseInt(a) * parseInt(b);
}

const showTriangle = () => {
  var a = 10;
  var j= 0;
  var k= 0;
  while(j<a) {
    console.log("while", j);
    j++;
  }

  do{
    console.log("do while",  j); // changer en k après 
    j++;
  }while(j<a)
  var d = parseInt(document.getElementById('d').value || 0);
  console.log("🚀 ~ file: test.js ~ line 15 ~ showTriangle ~ d", d)
  for(var i= 0; i< d; i++) {
    for(var j=0; j< i; j++) {
      document.getElementById('e').innerHTML += "*";
    }
    document.getElementById('e').innerHTML += "</br>";
  }
}