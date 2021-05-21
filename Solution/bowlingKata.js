//function to return the total score for a bowling game

function bowlingKata(str){
  let bowling = "";
  let flag = false;
  let count = 0;
  let num = 0;
  let strikePoint = 30, numberStrikes = 10;
  let totalScore = 0;

  if(str.length === 0){
    return "Input cannot be empty";
  }
  bowling = str.split("");
  for(let i=0; i<bowling.length; i++){
    num = Number(i);
    if(bowling[i] === '-'){
      num = 0;
    }
    if(!isNaN(bowling[i])){
      num = Number (bowling[i]);
    }
    //console.log(i + " " + num);
    if (bowling[i] === 'X'){
      num = 10 + (bowling[i+2] + bowling[i+3]);
      count++;
    }
    if(bowling[i] === '/'){
      num = 10 + (i+2);
    }
    totalScore += num;
  }
  if(count >= 10){
    return 30 * numberStrikes;
  }
  //console.log(totalScore);
  return totalScore;
}

module.exports = {
  bowlingKata
}
