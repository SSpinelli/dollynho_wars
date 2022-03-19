/* 
  Você esta vendo um vídeo no canal do Felipe Dollyschamps.
  Ao final do vídeo ele propõe um desafio:
  
  Dada uma lista de inteiros, me retorne os números que não estão presentes entre eles!(em formato string)

  Além disso caso o parâmetro tiver todos os números, me retorne uma string com o texto "Não sobrou nenhum número";

  E caso o array seja vazio retorne "Sobrou todos os números"

  Exemplo:
    [12, 34, 56, 78] ===> "09"
    [2015, 8, 26] ===> "3479"
*/

const array3 = [];

const leftovers = (array) => {
  const arrayNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const returnArr = arrayNumber.filter(el => !array.join().split('').includes(el))
  let msgString = '';
  if(returnArr.join('') === '0123456789') {
    msgString = 'Sobrou todos os números'; 
  } else if (returnArr.join('') === '') {
    msgString = 'Não sobrou nenhum número'; 
  } else {
    return returnArr.join('')
  }
  return msgString;
}
console.log(leftovers(array3));

module.exports = leftovers;