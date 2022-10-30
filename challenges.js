// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  return strings[(strings.length - 1)] + ", " + strings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  let num = arr[0];
  let repeticao = 0;

  for (let max = 0; max < arr.length; max += 1) {
    if (num < arr[max]) {
      num = arr[max];
    }
  }
  for (let contagem = 0; contagem < arr.length; contagem += 1) {
    if (num === arr[contagem]) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posisitionCat1 = cat1 - mouse;
  let positionCat2 = cat2 - mouse;
  let maisProx;

  if (Math.abs(posisitionCat1) < Math.abs(positionCat2)) {
    maisProx = 'cat1';
  } else if (Math.abs(positionCat2) < Math.abs(posisitionCat1)) {
    maisProx = 'cat2';
  } else if (Math.abs(posisitionCat1) === Math.abs(positionCat2)) {
    maisProx = 'os gatos trombam e o rato foge';
  }
  return maisProx;
}

// Desafio 8
function fizzBuzz(arrNum) {
  let arrString = [];
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] % 3 === 0 && arrNum[index] % 5 === 0) {
      arrString.push('fizzBuzz');
    } else if (arrNum[index] % 3 === 0) {
      arrString.push('fizz');
    } else if (arrNum[index] % 5 === 0) {
      arrString.push('buzz');
    } else {
      arrString.push('bug!');
    }
  }
  return arrString;
}

// Desafio 9
function encode(letters) {
  let codificada = '';
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] === 'a') {
      codificada += '1';
    } else if (letters[i] === 'e') {
      codificada += '2';
    } else if (letters[i] === 'i') {
      codificada += '3';
    } else if (letters[i] === 'o') {
      codificada += '4';
    } else if (letters[i] === 'u') {
      codificada += '5';
    } else {
      codificada += letters[i];
    }
  }
  return codificada;
}
function decode(letters2) {
  let decodificada = '';
  for (index = 0; index < letters2.length; index += 1) {
    if (letters2[index] === '1') {
      decodificada += 'a';
    } else if (letters2[index] === '2') {
      decodificada += 'e';
    } else if (letters2[index] === '3') {
      decodificada += 'i';
    } else if (letters2[index] === '4') {
      decodificada += 'o';
    } else if (letters2[index] === '5') {
      decodificada += 'u';
    } else {
      decodificada += letters2[index];
    }
  }
  return decodificada;
}

// Desafio 10
function techList() {
  //
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
