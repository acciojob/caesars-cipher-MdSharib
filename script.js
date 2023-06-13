// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  let decodedArr2 = []; // Your Result goes here
  
  // Only change code below this line
  for(let i=0; i<encodedStr.length; i++){
    if(encodedStr[i] === ' '){
      decodedArr2.push(' ');
      continue;
    }
    
    let curr = encodedStr.charCodeAt(i) + 13;
    let curr2 = encodedStr.charCodeAt(i);
    if(curr < 65 || curr > 90){
      curr2 = 64 + (13 - (90 - curr2));
      let ch = String.fromCharCode(curr2);
      decodedArr2.push(ch);
    }else {
      let ch = String.fromCharCode(curr);
      decodedArr2.push(ch);
    }
    
  }
  
  for(let i=0; i<decodedArr2.length; i++){
    let currString = "";
    while(i< decodedArr2.length && decodedArr2[i] !== " "){
      currString +=decodedArr2[i];
      i++;
    }
    decodedArr.push(currString);
  }
  // console.log(encodedStr[3] === ' ');
  return decodedArr; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
