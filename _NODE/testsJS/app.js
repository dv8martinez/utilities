const teste = [
  { id: 1, name: 'David ', age: 32 },
  { id: 2, name: 'felipe', age: 18 },
  { id: 3, name: 'felipe', age: 19 },
  { id: 4, name: 'jose', age: 16 },
  { id: 5, name: 'jose', age: 32 },
];

//Verificar itens iguais em um array de objetos(fazer a contagem dos mesmos)
const reduceTest = teste.reduce((acc, arr) => {
  // acc[arr.age] = acc[arr.age] + 1 || 1;
  acc[arr.name] = acc[arr.name] + 1 || 1;
  return acc;
}, {});

//adicionar dia a uma data (com isso se for o ultimo dia do mes, passa para o proximo mes)
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//pegar tempo (hora e mim) atual;
// var date = new Date("2020-08-31");
var date = new Date().toLocaleTimeString('pt-BR', {
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
});

console.clear();
// console.log(reduceTest);
// console.log('UAAAAA')
console.log(date);
