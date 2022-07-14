var array = [30768, 35014, 39620, 43778, 42533, 27851, 23378, 34353, 38257, 41694, 41229, 38212, 24518, 16993, 29724, 31513, 33330, 34938, 31125, 17448 ,  13562, 24440, 25062, 25789
];

var max = Math.max(...array);

var min = Math.min(...array); 
console.log("Максимальне число:" , max, "; Мінімальне число:", min , ".");
var result = {};
for (var i = 0; i < array.length; ++i)
{
  var a = array[i];
  if (result[a] != undefined)
      ++result[a];
  else
      result[a] = 1;
}
for (var key in result)
  console.log('Число ' + key + ' повторюється ' + result[key] + ' раз(а)');

var k = 24;

var stepLength = ((max - min) / k); 
console.log("Діапазон = ", stepLength);

for (var i = min; i < max; i += stepLength) { 
var e = i + stepLength; 
var numbers = array.filter(a => a >= i && a <= e);
console.log(`${numbers.length || "Немає"} чисел в заданому діапазоні [${i.toFixed(1)}, ${e.toFixed(1)}] >>`, numbers.join(', ')); 
}

