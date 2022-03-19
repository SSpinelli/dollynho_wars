/* 
  O Teacher Dolly te passou algumas frases e pediu para você dizer se elas são um pangram.
  pangram é uma frase que contem todas as letras do alfabeto pelo menos uma vez.
  por exemplo a frase: "The quick brown fox jumps over the lazy dog" é um pangram, pq usam as letras A - Z pelo menos uma vez(não é para diferenciar maiuscula de minuscula).

  dada uma string defina se é ou não um pangram, retornando true quando for e false quando não for.
*/

function isPangram(phrase) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return alphabet.every(el => phrase.toLowerCase().includes(el));
}

module.exports = isPangram;
