//function to return the total score for a bowling game

function bowlingKata(str){
  let bowling = "";
  let count = 0, totalScore = 0;
  let numberStrikes = 10;
  let num = 0;
  if(str.length === 0){
    return "Input cannot be empty";
  }

  bowling = str.replace(/ /g, "");
  bowling = bowling.replace(/-/g,'0');

  for(let i=0; i<bowling.length; i++){
    if(bowling[i] === '-'){
      num = 0;
    }
    if(!isNaN(bowling[i])){
      num = Number (bowling[i]);
    }
    //console.log(i + " " + num);
    // if (bowling[i] === 'X'){
    //   num = 10 + getStrike(bowling, i, Number(bowling[i+1])) + getStrike(bowling, i, Number(bowling[i+2]));
    //   count++;
    // }
    if (bowling[i] === 'X'){
      num = 10 + (Number(bowling[i+1]) + Number(bowling[i+2]));
      count++;
    }
    if(bowling[i] === '/'){
      num = (10 + Number(bowling[i+1])) - Number(bowling[i-1]);
    }
    if(i === 20){
      break;
    }
    totalScore += num;
  }
  if(count >= 10){
    return 30 * numberStrikes;
  }
  return totalScore;
}

module.exports = {
  bowlingKata
}
