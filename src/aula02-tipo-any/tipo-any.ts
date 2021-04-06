// Any representa uma falta de tipo ou qualquer coisa
// Pode desencadear problemas

// Utilize any apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
