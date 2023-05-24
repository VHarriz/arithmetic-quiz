var choiceAEl = document.getElementById('choiceA');
var choiceBEl = document.getElementById('#choiceB');
var choiceCEl = document.getElementById('#choiceC');
var choiceDEL = document.getElementById('#choiceD');


var quizInfo = [{question: 'What is 4 x 2?', answer: '8'},{question: 'What is 1 - 1?', answer: '0'},{question: 'What is 50 / 2?', answer: '25'},{question: 'What is 7 + 7?', answer: '14'},{question: 'What is 50 + 50?', answer: '100'},{question: 'What is Fifteen plus Fifteen?', answer: '30'},{question: 'What is Zero minus Zero?', answer: '0'},{question: 'What is 45 +45?', answer: '90'} ];

// console.log(quizInfo);

// const indexOfI = quizInfo.indexOf(question,[i]);
console.log(Object.values(quizInfo[0]));
// console.log(indexOfI);
// if (quizInfo.question === quizInfo.answer)

var choices = [ 
    ['8','9','10','11'],
['0','1','2','3'],
['25','26','27','28'],
['14','15','16','17'],
['100','101','102','103'],
['30','31','32','33'],
['0','1','2','5'],
['90','91','92','93']

];

var timeEl = document.getElementById('time');
var timeRem = 60;
var timeInterval = setInterval(function() {
timeRem--;
timeEl.textContent = 'Time Remaining' + timeRem;  
if (timeRem === 0) {
    clearInterval(interval)
    timeEl.textContent = 'Time expired';
}  
},1000);

