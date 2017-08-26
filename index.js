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

document.getElementById('decimal').onclick = function() {
  hold = Number(pending);
  oper = 'decimal'
  updateValues();

}

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
  document.getElementById('square').onclick = function() {
hold = Number(pending);
    oper = 'square'
    updateValues();

}
document.getElementById('cube').onclick = function() {
hold = Number(pending);
  oper = 'cube'
  updateValues();

}
document.getElementById('squareroot').onclick = function() {
hold = Number(pending);
  oper = 'squareroot'
  updateValues();

}
document.getElementById('cuberoot').onclick = function() {
hold = Number(pending);
  oper = 'cuberoot'
  updateValues();

}
document.getElementById('sin').onclick = function() {
hold = Number(pending);
  oper = 'sin'
  updateValues();

}
document.getElementById('cosin').onclick = function() {
hold = Number(pending);
  oper = 'cosin'
  updateValues();

}
document.getElementById('tan').onclick = function() {
hold = Number(pending);
  oper = 'tan'
  updateValues();

}
document.getElementById('arcsin').onclick = function() {
hold = Number(pending);
  oper = 'arcsin'
  updateValues();

}
document.getElementById('arccos').onclick = function() {
hold = Number(pending);
  oper = 'arccos'
  updateValues();

}
document.getElementById('arctan').onclick = function() {
hold = Number(pending);
  oper = 'arctan'
  updateValues();

}
document.getElementById('log').onclick = function() {
hold = Number(pending);
  oper = 'LN'
  updateValues();

}

document.getElementById('factorial').onclick = function() {
    hold = Number(pending);
    oper = '!'
    updateValues();

}
document.getElementById('e').onclick = function() {
hold = Number(pending);
  oper = 'e'
  pending = Math.E;
  updateValues();

}
document.getElementById('pi').onclick = function() {
hold = Number(pending);
  oper = 'PI'
  pending = Math.PI;
  updateValues();

}
document.getElementById('exp').onclick = function() {
hold = Number(pending);

  oper = '^'
  pending = ''

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
  else if (oper === 'square') result = pending*pending;
  else if (oper === 'cube') result = pending*pending*pending;
  else if (oper === 'squareroot') result = Math.sqrt(pending);
  else if (oper === 'cuberoot') result = Math.cbrt(pending);
  else if (oper === 'sin') result = Math.sin(pending);
  else if (oper === 'cosin') result = Math.cos(pending);
  else if (oper === 'tan') result = Math.tan(pending);
  else if (oper === 'arcsin') result = Math.asin(pending);
  else if (oper === 'arccos') result = Math.acos(pending);
  else if (oper === 'arctan') result = Math.atan(pending);
  else if (oper === 'LN') result = Math.log(pending);
  else if (oper === 'e') result = Math.E;
  else if (oper === 'PI') result = Math.PI;
  else if (oper === '^') result = Math.pow(hold, pending);
  else if (oper === '!') {
  k = 1;
  for(x = 1; x <= pending; x++) {
    k = k*x;
  }
  result = k;
}

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
