let initialValues = ["vals", "tango", 1, 9, 4, true, null]
console.log(initialValues)


//pct 1


 let otherValues = [5, 'anotherString', false, { anotherKey: 'anotherValue' }, ['nested', 'array'], 42, 'extraString']
console.log(otherValues)

console.log('initialValues:', initialValues);
console.log('otherValues:', otherValues);

//pct 2

 initialValues.push(otherValues);
console.log('initialValues:', initialValues);

//pct 3

for (var i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === 'number') {
      initialValues[i] += 2; 
  }
}
console.log('initialValues:', initialValues);


// pct 4

for (var i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === 'number') {
      initialValues[i] = initialValues[i] + 2; 
  }
}

console.log('initialValues:', initialValues);




//pct 5
for (var i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === 'string') {
      initialValues[i] += " happy coding";
  }
}

console.log('initialValues:', initialValues);

//pct 6

for (var i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === 'boolean') {
      initialValues[i] = !initialValues[i];
  }
}

console.log('initialValues:', initialValues);