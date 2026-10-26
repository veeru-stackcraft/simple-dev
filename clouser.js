function outer(age) {
  let lexicalScopeAge = 'adult';

  function clouserOne(age) {
    if (age >= 18 || lexicalScopeAge == 'adult') {
      console.log('He/She is eligible for vote');
    } else {
      console.log('He/She is not eligible for vote');
    }
  }
  return clouserOne;
}

console.log('---------------------CLOUSERS Example---------------------');
const clouser1 = outer(19);
clouser1();
clouser1();
