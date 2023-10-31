function calculMedieAritmetica(array) {
  var suma = 0;

  for (var i = 0; i < array.length; i++) {
      suma += array[i];
  }

  var media = suma / array.length;
  return media;
}

var numere = [10, 20, 30, 40, 50];

var suma = 0;
for (var i = 0; i < numere.length; i++) {
  suma += numere[i];
}

var mediaAritmetica = suma / numere.length;

console.log("Media aritmetica:", mediaAritmetica);


//

var arrayMixt = [10, "abc", true, 20, false, 30, "def"];

var sumaNumerelor = 0;

for (var i = 0; i < arrayMixt.length; i++) {
    if (typeof arrayMixt[i] === 'number') {
        sumaNumerelor += arrayMixt[i];
    }
}

console.log("Suma numerelor:", sumaNumerelor);


//bonus

function fibonacci(n) {
  var fibArray = [0, 1];

  for (var i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

var primele20Fibonacci = fibonacci(20);
console.log("Primele 20 numere din sirul lui Fibonacci:", primele20Fibonacci);