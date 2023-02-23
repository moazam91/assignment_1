//Q. No.44: Answer

// let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "David Blaine"];


function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
      console.log(magiciansArray[i]);
    }
  }
  
  function make_great(magiciansArray) {
    let greatMagicians = [];
    for (let i = 0; i < magiciansArray.length; i++) {
      greatMagicians.push("the Great " + magiciansArray[i]);
    }
    return greatMagicians;
  }
  
  let greatMagicians = make_great([...magicians]);
  
  console.log("Original Magicians:");
  show_magicians(magicians);
  console.log("Great Magicians:");
  show_magicians(greatMagicians);
  