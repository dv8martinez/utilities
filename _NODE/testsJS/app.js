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

//somar valores de array

var list = [
    {name: 'David', age: 33, kg: 89},
    {name: 'Paulo', age: 30, kg: 80},
    {name: 'Felipe', age: 39, kg: 70},
] ;
var suma = list.reduce(function (total, currentValue) {
    const peso = total + currentValue.kg;
    const idades =  total + currentValue.age;
    return idades;
}, 0);
console.log(suma);

const arr = ['1' , '4' , '3' , '5' , '3'];

let obj = list.reduce((acc, val) => (
    {...acc, [val.age]: val.age}), {});
//                                                         ^--- initial value
console.log(obj);

// const {total, quantity} = [{qta:5, prezzo: 100}, {qta:5, prezzo: 100}, {qta:5, prezzo: 100}]
const  {totalIdade, totalPeso} = list.reduce((acc, result) => {
     
      acc.totalIdade += result.age;
      acc.totalPeso += result.kg;
     
      return acc;
}, {totalIdade:0, totalPeso:0});
    

console.log('Total Idade', totalIdade, 'Total Peso', totalPeso);
