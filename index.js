// index.js
pending = '';
var result = 0;
var hold = null;
var oper = null;
var anybasenumber = null;
var thebase = null;
function updateValues() {
  document.getElementById('res').innerText = result.toString(document.getElementById("thebase").value);
  document.getElementById('pend').innerText = pending.toString(document.getElementById("thebase").value);
  if(hold != null) {
    document.getElementById('holding').innerText = hold.toString(document.getElementById("thebase").value);
  }
  if(oper != null) {
    document.getElementById('op').innerText = oper.toString();
}

}
updateValues();

var buttonmaker = function(base) {
  var buttonHTML = '';
  var i = 0;
  while(i < base) {
    var num = i.toString(base);
    buttonHTML = buttonHTML + '<button class="numbutton" id="num'+num+'" onclick="numpresser(\''+num+'\')">'+num+'</button>';
if(i%3===2) {
  buttonHTML = buttonHTML + '<br>';
}
    i = i+1;

  }


  document.getElementById("buttons").innerHTML=buttonHTML;
}
var numpresser = function(num) {
  pending = pending + num;
  updateValues();
}
/*
document.getElementById('one').onclick = function() {
pending = pending + 1;
updateValues();

}
document.getElementById('two').onclick = function() {
  pending = pending + 2;
  updateValues();

}
document.getElementById('three').onclick = function() {
  pending = pending + 3;
  updateValues();

}
document.getElementById('four').onclick = function() {
  pending = pending + 4;
  updateValues();

}
document.getElementById('five').onclick = function() {
  pending = pending + 5;
  updateValues();

}
document.getElementById('six').onclick = function() {
  pending = pending + 6;
  updateValues();

}
document.getElementById('seven').onclick = function() {
  pending = pending + 7;
  updateValues();

}
document.getElementById('eight').onclick = function() {
  pending = pending + 8;
  updateValues();

}
document.getElementById('nine').onclick = function() {
  pending = pending + 9;
  updateValues();

}
document.getElementById('zero').onclick = function() {
  pending = pending + 0;
  updateValues();

}*/
document.getElementById('addition').onclick = function() {
  hold = Number(pending);
  pending = '0'
  oper = '+'
  updateValues();

}
document.getElementById('subtraction').onclick = function() {
  hold = Number(pending);
  pending = '0'
  oper = '-'
  updateValues();

}

document.getElementById('multiplication').onclick = function() {
  hold = Number(pending);
  pending = '0'
  oper = 'x'
  updateValues();

}
document.getElementById('division').onclick = function() {
  hold = Number(pending);
  pending = '0'
  oper = '/'
  updateValues();

}
document.getElementById('convertbase').onclick = function() {
  pending = document.getElementById("anybasenumber").value;
console.log("convertbase");
buttonmaker(parseInt(document.getElementById("thebase").value, 10))
  updateValues();

}


document.getElementById('equals').onclick = function() {
  pending = parseInt((pending), document.getElementById("thebase").value);
  if(hold === null || oper === null) return;
  else if (oper === '+')  result = hold + pending;
  else if (oper === '-') result = hold - pending;
  else if (oper === 'x') result = hold * pending;
  else if (oper === '/') result = hold/pending;
  pending = String(result);
  hold = null;
  oper = null;
  updateValues();
}
document.getElementById('reset').onclick = function() {
  pending = ''
  holding = null
  oper = null
  result = 0;

  updateValues();

}
