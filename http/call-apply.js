var pet = {
  words : '...',
  speak : function (say) {
    console.log(say + ' ' + this.words)
  }
};

// pet.speak('I');

var dog = {
  words : '汪汪汪'
};

// pet.speak.call(dog , 'dog speak');
pet.speak.apply(dog , ['dog speak']);
