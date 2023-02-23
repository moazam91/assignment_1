//Q. No.43: Answer

// let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "David Blaine"];

function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
      console.log(magiciansArray[i]);
    }
  }
  
  
  function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
      magiciansArray[i] = "the Great " + magiciansArray[i];
    }
  }
  
  make_great(magicians);
  
  show_magicians(magicians);
  