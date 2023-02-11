 
function abrirModal(id, nome1) {
let m = id +""+ nome1;
  const modal = document.getElementById(m);
  modal.style.visibility = "visible";
  modal.style.display = "block";
}

function fecharModal(id) {
   const modal = document.getElementById(id);
   modal.style.visibility = "hidden";
   modal.style.display = "none";
}

function abrirResult(id) {
  const result = document.getElementById(id);
  result.style.visibility = "visible";
  result.style.display = "block";
}

function executaDois(id){
   if (id=='resultModal2'){
    lerValoresModal2();
  } else if (id=='resultModal3'){
    lerValoresModal3();
  } else if (id=='resultModal1'){
    lerValoresModal1();
  }
  abrirResult(id);
 }
  
 function lerValoresModal1(){
  var a1 = document.getElementById("a1Modal1");
  var n1 = document.getElementById("n1Modal1");
  
  const x1 = n1.value/a1.value;
  var eqx1 = 'x=  <u>'+n1.value+'</u>';

  document.getElementById("resultadof").innerHTML = x1.toFixed();
  document.getElementById("x1Modal1").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+a1.value;
  document.getElementById("dModal1").innerHTML = eqx1;
}

function lerValoresModal2(){
  var a1 = document.getElementById("a1Modal2");
  var a2 = document.getElementById("a2Modal2");
  var b1 = document.getElementById("b1Modal2");
  var b2 = document.getElementById("b2Modal2");
  var n1 = document.getElementById("n1Modal2");
  var n2 = document.getElementById("n2Modal2");
  const dd = (a1.value * b2.value) - (b1.value * a2.value);
  const x1 = ((n1.value * b2.value) - (b1.value * n2.value))/ dd;
  const x2 = ((a1.value * n2.value) - (n1.value * a2.value))/ dd;

  document.getElementById("resultadoa").innerHTML = x1.toFixed();
  document.getElementById("resultadob").innerHTML = x2.toFixed();
  document.getElementById("dModal2").innerHTML = 'D = ( ' + a1.value + ' * ' + b2.value + ' ) - ( ' + b1.value + ' * ' + a2.value + ' )';
  document.getElementById("x1Modal2").innerHTML = 'x1= <u>( '+ n1.value + ' * ' + b2.value + ' ) - ( ' + b1.value + ' * ' + n2.value + ' ) </u>';
  document.getElementById("d1Modal2").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp'+dd.toFixed();
  document.getElementById("x2Modal2").innerHTML = 'x2= <u>( ' + a1.value + ' * ' + n2.value + ' ) - ( ' + n1.value + ' * ' + a2.value + ' )</u>';
  document.getElementById("d2Modal2").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp'+dd.toFixed();
}

function lerValoresModal3(){
  var a1 = document.getElementById("a1Modal3");
  var a2 = document.getElementById("a2Modal3");
  var a3 = document.getElementById("a3Modal3");
  var b1 = document.getElementById("b1Modal3");
  var b2 = document.getElementById("b2Modal3");
  var b3 = document.getElementById("b3Modal3");
  var c1 = document.getElementById("c1Modal3");
  var c2 = document.getElementById("c2Modal3");
  var c3 = document.getElementById("c3Modal3");
  var n1 = document.getElementById("n1Modal3");
  var n2 = document.getElementById("n2Modal3");
  var n3 = document.getElementById("n3Modal3");
  const dd = ((a1.value*b2.value*c3.value)+(b1.value*c2.value*a3.value)+(c1.value*a2.value*b3.value))-((b1.value*a2.value*c3.value)+(a1.value*c2.value*b3.value)+(c1.value*b2.value*a3.value));
  const x1 = (((n1.value*b2.value*c3.value)+(b1.value*c2.value*n3.value)+(c1.value*n2.value*b3.value))-((b1.value*n2.value*c3.value)+(n1.value*c2.value*b3.value)+(c1.value*b2.value*n3.value)))/dd;
  const x2 = (((a1.value*n2.value*c3.value)+(n1.value*c2.value*a3.value)+(c1.value*a2.value*n3.value))-((n1.value*a2.value*c3.value)+(a1.value*c2.value*n3.value)+(c1.value*n2.value*a3.value)))/dd;
  const x3 = (((a1.value*b2.value*n3.value)+(b1.value*n2.value*a3.value)+(n1.value*a2.value*b3.value))-((b1.value*a2.value*n3.value)+(a1.value*n2.value*b3.value)+(n1.value*b2.value*a3.value)))/dd;

  document.getElementById("resultadoc").innerHTML = x1.toFixed();
  document.getElementById("resultadod").innerHTML = x2.toFixed();
  document.getElementById("resultadoe").innerHTML = x3.toFixed();
  document.getElementById("dModal3").innerHTML = 'D = ((  ' + a1.value + '*' + b2.value + '*' + c3.value + ')+(' + b1.value + '*' + c2.value + '*' + a3.value + ')+(' + c1.value + '*' + a2.value + '*' + b3.value + '))-((' + b1.value + '*' + a2.value + '*' + c3.value +')+(' + a1.value + '*' + c2.value + '*' + b3.value + ')+(' + c1.value + '*' + b2.value + '*' + a3.value + '))';
  document.getElementById("x1Modal3").innerHTML = 'x1= <u>(('+n1.value+'*'+b2.value+'*'+c3.value+')+('+b1.value+'*'+c2.value+'*'+n3.value+')+('+c1.value+'*'+n2.value+'*'+b3.value+'))-(('+b1.value+'*'+n2.value+'*'+c3.value+')+('+n1.value+'*'+c2.value+'*'+b3.value+')+('+c1.value+'*'+b2.value+'*'+n3.value+'))</u>';
  document.getElementById("d1Modal3").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp'+dd.toFixed();
  document.getElementById("x2Modal3").innerHTML = 'x2= <u>(('+a1.value+'*'+n2.value+'*'+c3.value+')+('+n1.value+'*'+c2.value+'*'+a3.value+')+('+c1.value+'*'+a2.value+'*'+n3.value+'))-(('+n1.value+'*'+a2.value+'*'+c3.value+')+('+a1.value+'*'+c2.value+'*'+n3.value+')+('+c1.value+'*'+n2.value+'*'+a3.value+'))</u>';
  document.getElementById("d2Modal3").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp'+dd.toFixed();
  document.getElementById("x3Modal3").innerHTML = 'x3= <u>(('+a1.value+'*'+b2.value+'*'+n3.value+')+('+b1.value+'*'+n2.value+'*'+a3.value+')+('+n1.value+'*'+a2.value+'*'+b3.value+'))-(('+b1.value+'*'+a2.value+'*'+n3.value+')+('+a1.value+'*'+n2.value+'*'+b3.value+')+('+n1.value+'*'+b2.value+'*'+a3.value+'))</u>';
  document.getElementById("d3Modal3").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp'+dd.toFixed();
}