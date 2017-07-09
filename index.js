// index.js
let pending = '0';
let result = 0;
let hold = null;
let oper = null;
function updateValues() {
  document.getElementById('res').innerText = String(result);
  document.getElementById('pend').innerText = String(pending);
  document.getElementById('holding').innerText = String(hold);
  document.getElementById('op').innerText = String(oper);
}


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

document.getElementById('equals').onclick = function() {
  pending = Number(pending);
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
