/* 
Write a function called drawingNumbers that will return an array of 6 numbers (random).

- No duplicate numbers
- Validate that that number doesn't exisit in the array before we push it


*/
function getRandomNumber(min, max) {
    let range = max - min + 1;
  
    return Math.floor(Math.random() * range) + min;
  }
  
  export function drawingNumbers() {
    let lottoNumbers = [];
  
    while (lottoNumbers.length < 6) {
      let randomNum = getRandomNumber(1, 80);
      if (validateNumber(randomNum, lottoNumbers) === false) {
        lottoNumbers.push(randomNum);
      }
    }
    return lottoNumbers;
  }
  
  function validateNumber(randomNumberToCheck, currentLottoPicks) {
    return currentLottoPicks.includes(randomNumberToCheck);
  }
  
  const winningNumbers = drawingNumbers();
  
  console.log(winningNumbers);
  

  
  
let numberOfTickets = 10;

let playerTickets = gamblingProblems(numberOfTickets);


  export function gamblingProblems(numberOfTickets){
    let paperTickets = [];
    for(let i=0 ; i<numberOfTickets ; i++){
        paperTickets.push(drawingNumbers());
    } 
    return paperTickets
  }
  
  console.log("Player Ticket =",playerTickets)