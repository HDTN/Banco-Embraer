// export default function currencyFormat(num: number) {
//    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// }

export default function currencyFormat(num: string | number){
  var value = num;
  
   value = value + '';
   value = parseInt(value.replace(/[\D]+/g,''));
   value = value + '';
   value = value.replace(/([0-9]{2})$/g, ",$1");

   if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
   }

   return `R$ ${value}`
}