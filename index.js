// index.js
var pending = '';
var result = 0;
var hold = null;
var oper = null;
var anybasenumber = null;
var thebase = null;

var X_value = "testX";



var evaluateX = function(x) {
  var old_hold = hold;
  var old_pending = pending;
  var old_oper = oper;
  var old_result = result;
  if(pending === X_value) pending = String(x);
  if(hold === X_value) hold = x;
  evaluate();
  console.log(result, "cute kitten");
  var ret = result;
  hold = old_hold;
  pending = old_pending;
  oper = old_oper;
  result = old_result;
  return ret;
}


var updateTable = function() {

var tableHTML = "";
if(thebase !== null && oper !== null && hold !== null) {
console.log("this is a test", thebase, oper, hold, pending, result);


for(var x = 0; x <= 100; x ++) {
  var res = evaluateX(x);
  tableHTML+="<tr><td>" + x + "</td><td>" +  x.toString(document.getElementById("thebase").value) + "</td><td>"+res.toString(document.getElementById("thebase").value)+ '</td><td>' + res + "</td></tr>"
}

document.getElementById("funcoutput").innerHTML = tableHTML;

} else {
  console.log("testin");
}
}
function updateValues() {
  console.log(pending);
  console.log(hold);
  console.log(oper);
  console.log(result);
  document.getElementById('res').innerText = result.toString(document.getElementById("thebase").value);
  document.getElementById('pend').innerText = pending.toString(document.getElementById("thebase").value);
  if(hold != null) {
    document.getElementById('holding').innerText = hold.toString(document.getElementById("thebase").value);
  }
  if(oper != null) {
    document.getElementById('op').innerText = oper.toString();
}
updateTable();
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
function parsePending() {
  var anumber = pending;
  pending = '';
  if(anumber === X_value) return anumber;
  else return Number(anumber);
}


var numpresser = function(num) {
  pending = pending + num;
  updateValues();
}

document.getElementById('decimal').onclick = function() {
  hold = parsePending();
  oper = 'decimal'
  updateValues();

}

document.getElementById('addition').onclick = function() {
  hold = parsePending();
  pending = '0'
  oper = '+'
  updateValues();

}
document.getElementById('subtraction').onclick = function() {
  hold = parsePending();
  pending = '0'
  oper = '-'
  updateValues();

}

document.getElementById('multiplication').onclick = function() {
  hold = parsePending();
  pending = '0'
  oper = 'x'
  updateValues();

}
document.getElementById('division').onclick = function() {
  hold = parsePending();
  pending = '0'
  oper = '/'
  updateValues();
}
  document.getElementById('square').onclick = function() {
hold = parsePending();
    oper = 'square'
    updateValues();

}
document.getElementById('cube').onclick = function() {
hold = parsePending();
  oper = 'cube'
  updateValues();

}
document.getElementById('squareroot').onclick = function() {
hold = parsePending();
  oper = 'squareroot'
  updateValues();

}
document.getElementById('cuberoot').onclick = function() {
hold = parsePending();
  oper = 'cuberoot'
  updateValues();

}
document.getElementById('sin').onclick = function() {
hold = parsePending();
  oper = 'sin'
  updateValues();

}
document.getElementById('cosin').onclick = function() {
hold = parsePending();
  oper = 'cosin'
  updateValues();

}
document.getElementById('tan').onclick = function() {
hold = parsePending();
  oper = 'tan'
  updateValues();

}
document.getElementById('arcsin').onclick = function() {
hold = parsePending();
  oper = 'arcsin'
  updateValues();

}
document.getElementById('arccos').onclick = function() {
hold = parsePending();
  oper = 'arccos'
  updateValues();

}
document.getElementById('arctan').onclick = function() {
hold = parsePending();
  oper = 'arctan'
  updateValues();

}
document.getElementById('log').onclick = function() {
hold = parsePending();
  oper = 'LN'
  updateValues();

}

document.getElementById('factorial').onclick = function() {
    hold = parsePending();
    oper = '!'
    updateValues();

}
document.getElementById('e').onclick = function() {
hold = parsePending();
  oper = 'e'
  pending = Math.E;
  updateValues();

}
document.getElementById('pi').onclick = function() {
hold = parsePending();
  oper = 'PI'
  pending = Math.PI;
  updateValues();

}
document.getElementById('exp').onclick = function() {
hold = parsePending();

  oper = '^'
  pending = ''

  updateValues();

}

document.getElementById('variable').onclick = function() {
  pending = X_value;
  updateValues();
}

document.getElementById('convertbase').onclick = function() {
console.log("convertbase");
thebase=parseInt(document.getElementById("thebase").value, 10);
buttonmaker(thebase)
  updateValues();

}

function evaluate() {


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

document.getElementById('equals').onclick =evaluate;
document.getElementById('reset').onclick = function() {
  pending = ''
  holding = null
  oper = null
  result = 0;

  updateValues();

}
