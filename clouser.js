function outer() {
  let lexicalScopeVariable = 'Hello inner defined variable';

  function clouserOne() {
    console.log(lexicalScopeVariable);
  }
  return clouserOne;
}

console.log('---------------------CLOUSERS Example---------------------');
const clouser1 = outer();
clouser1();
